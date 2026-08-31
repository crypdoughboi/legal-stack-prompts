import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PromptBank } from "@/components/PromptBank";

function setup() {
  // userEvent.setup() installs its own clipboard stub, so replace it after.
  const user = userEvent.setup();
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });
  return { user, writeText };
}

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("PromptBank", () => {
  it("renders the landing view", () => {
    setup();
    render(<PromptBank />);
    expect(screen.getByRole("heading", { name: "What are you working on?" })).toBeInTheDocument();
    expect(screen.getByText("65 prompts · 8 categories")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search 65 transactional prompts"),
    ).toBeInTheDocument();
    expect(screen.getByText("Built by Josh Benzadon")).toBeInTheDocument();
  });

  it("opens and closes a practice menu from its chip", async () => {
    const { user } = setup();
    render(<PromptBank />);
    const chip = screen.getByRole("button", { name: /Corporate \/ M&A/ });

    await user.click(chip);
    expect(chip).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Corporate / M&A prompts" })).toBeInTheDocument();
    expect(screen.getByText("11 practical starting points")).toBeInTheDocument();
    expect(screen.getByText("Acquisition agreements & diligence")).toBeInTheDocument();

    await user.click(chip);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes the open menu on an outside click", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.click(screen.getByRole("button", { name: /Finance/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(document.body);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("filters prompts as you search and clears the query", async () => {
    const { user } = setup();
    render(<PromptBank />);
    const search = screen.getByLabelText("Search the prompt bank");

    await user.type(search, "estoppel");
    const results = screen.getByRole("listbox");
    expect(within(results).getByText("Estoppel and SNDA review")).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, "zzzzzz");
    expect(screen.getByText(/No prompts match/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(search).toHaveValue("");
  });

  it("selects a prompt and shows the guided builder", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.click(screen.getByRole("button", { name: /Corporate \/ M&A/ }));
    await user.click(screen.getByText("M&A diligence risk matrix"));

    expect(screen.getByRole("heading", { name: "M&A diligence risk matrix" })).toBeInTheDocument();
    expect(screen.getByText("Add the matter context")).toBeInTheDocument();
    expect(screen.getByText("0/10 filled")).toBeInTheDocument();
    // Landing-only sections are hidden once a prompt is selected.
    expect(screen.queryByRole("heading", { name: "What are you working on?" })).not.toBeInTheDocument();
    expect(screen.queryByText("Built by Josh Benzadon")).not.toBeInTheDocument();

    const generated = screen.getByLabelText("Generated prompt") as HTMLTextAreaElement;
    expect(generated.value).toContain("[CLIENT OR PRINCIPAL PARTY]");
    expect(generated.value).toContain("MATTER-SPECIFIC TASK");
  });

  it("rewrites the generated prompt as matter details are filled in", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.click(screen.getByRole("button", { name: /Real Estate/ }));
    await user.click(screen.getByText("Real estate closing checklist"));

    await user.type(screen.getByLabelText("Client or principal party"), "Acme Holdings");
    await user.selectOptions(screen.getByLabelText("Our role"), "Buyer");

    const generated = screen.getByLabelText("Generated prompt") as HTMLTextAreaElement;
    expect(generated.value).toContain("Client / principal party: Acme Holdings");
    expect(generated.value).toContain("Our role: Buyer");
    expect(screen.getByText("2/10 filled")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear details" }));
    expect(generated.value).toContain("Client / principal party: [CLIENT OR PRINCIPAL PARTY]");
    expect(screen.getByText("0/10 filled")).toBeInTheDocument();
  });

  it("copies the generated prompt to the clipboard", async () => {
    const { user, writeText } = setup();
    render(<PromptBank />);
    await user.click(screen.getByRole("button", { name: /Investment Funds/ }));
    await user.click(screen.getByText("LPA terms matrix"));

    await user.click(screen.getByRole("button", { name: /Copy full prompt/ }));
    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0][0]).toContain("MATTER-SPECIFIC TASK");
    expect(await screen.findByText("Copied")).toBeInTheDocument();
  });

  it("keeps the free-form composer copy button disabled until there is text", async () => {
    const { user, writeText } = setup();
    render(<PromptBank />);
    const copy = screen.getByRole("button", { name: /Copy prompt/ });
    expect(copy).toBeDisabled();

    await user.type(screen.getByLabelText("Prompt workspace"), "Draft a closing checklist.");
    expect(copy).toBeEnabled();
    await user.click(copy);
    expect(writeText).toHaveBeenCalledWith("Draft a closing checklist.");
  });

  it("returns to the landing view from the Change button", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.click(screen.getByRole("button", { name: /Diligence \/ Extraction/ }));
    await user.click(screen.getByText("Change-of-control consent sweep"));
    await user.click(screen.getByRole("button", { name: "Change" }));

    expect(screen.getByRole("heading", { name: "What are you working on?" })).toBeInTheDocument();
    expect(screen.getByLabelText("Prompt workspace")).toHaveValue("");
  });

  it("opens the matching practice menu from a featured workflow card", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.click(screen.getByText("Fund launch"));

    expect(screen.getByRole("dialog", { name: "Investment Funds prompts" })).toBeInTheDocument();
  });

  it("selects a prompt straight from search results", async () => {
    const { user } = setup();
    render(<PromptBank />);
    await user.type(screen.getByLabelText("Search the prompt bank"), "side letter");
    await user.click(screen.getByText("Side letter obligations matrix"));

    expect(screen.getByRole("heading", { name: "Side letter obligations matrix" })).toBeInTheDocument();
    expect(screen.getByLabelText("Search the prompt bank")).toHaveValue("");
  });
});
