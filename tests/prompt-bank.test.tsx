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

function sideNav() {
  return screen.getByRole("navigation", { name: "Browse by task and practice area" });
}

/** Selects "Review a document" from the side nav and opens the M&A diligence prompt. */
async function openMaDiligence(user: ReturnType<typeof userEvent.setup>) {
  await user.click(within(sideNav()).getByRole("button", { name: "Review a document" }));
  await user.click(screen.getByText("M&A diligence risk matrix"));
}

beforeEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("PromptBank", () => {
  it("renders the browse-first home with the side nav", () => {
    setup();
    render(<PromptBank />);
    expect(screen.getByRole("heading", { name: "Every prompt your practice needs." })).toBeInTheDocument();
    expect(screen.getByText("65 prompts · 8 practice areas")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search prompts")).toBeInTheDocument();
    expect(screen.getByText("All prompts by task")).toBeInTheDocument();
    expect(screen.getByText(/Built by/)).toBeInTheDocument();

    const nav = sideNav();
    expect(
      within(nav).getByRole("button", { name: "The Legal Stack Prompt Bank home" }),
    ).toHaveTextContent("The Legal Stack");
    expect(within(nav).getByText("What do you need to do?")).toBeInTheDocument();
    expect(within(nav).getByRole("button", { name: "All tasks" })).toHaveAttribute("aria-pressed", "true");
    for (const label of [
      "Review a document",
      "Compare two documents",
      "Find negotiation issues",
      "Build an issues or status list",
      "Draft something",
      "Summarize a matter",
      "Extract terms into a table",
      "Build a checklist",
      "Write to a client or partner",
    ]) {
      expect(within(nav).getByRole("button", { name: label })).toBeInTheDocument();
    }
  });

  it("browses by task from the side nav, which groups the list by practice area", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await user.click(within(sideNav()).getByRole("button", { name: "Review a document" }));
    expect(within(sideNav()).getByRole("button", { name: "Review a document" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText("By practice area")).toBeInTheDocument();

    const group = screen.getByRole("button", { name: /^Corporate \/ M&A/ });
    expect(group).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("M&A diligence risk matrix")).toBeInTheDocument();
  });

  it("opens a prompt from the browse list into the guided workspace", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    expect(screen.getByRole("heading", { name: "M&A diligence risk matrix" })).toBeInTheDocument();
    expect(screen.getByText("Give the AI the facts")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Every prompt your practice needs." })).not.toBeInTheDocument();

    const generated = screen.getByLabelText("Your prompt — editable") as HTMLTextAreaElement;
    expect(generated.value).toContain("MATTER: [describe the matter or transaction]");
    expect(generated.value).toContain("TASK");
  });

  it("collapsing an expanded group hides its prompts again", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await user.click(within(sideNav()).getByRole("button", { name: "Review a document" }));
    const group = screen.getByRole("button", { name: /^Corporate \/ M&A/ });
    expect(screen.getByText("M&A diligence risk matrix")).toBeInTheDocument();

    await user.click(group);
    expect(group).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("M&A diligence risk matrix")).not.toBeInTheDocument();
  });

  it("returns to home from the workspace's back button", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    const back = screen.getByRole("button", { name: "← Start over" });
    await user.click(back);
    expect(screen.getByRole("heading", { name: "Every prompt your practice needs." })).toBeInTheDocument();
  });

  it("narrows by practice area and reveals its subcategories", async () => {
    const { user } = setup();
    render(<PromptBank />);
    const nav = sideNav();

    expect(screen.getByText("Each practice area breaks down further into its own subcategories once selected.")).toBeInTheDocument();

    await user.selectOptions(within(nav).getByLabelText("Practice area"), "Real Estate");
    expect(within(nav).getByText("Subcategories in Real Estate")).toBeInTheDocument();
    const topic = within(nav).getByRole("button", { name: /Leasing, estoppels & sale-leasebacks/ });
    expect(topic).toHaveTextContent("3");

    await user.click(topic);
    expect(screen.getByText("3 prompts shown")).toBeInTheDocument();
    expect(screen.getByText("Estoppel and SNDA review")).toBeInTheDocument();
  });

  it("clears every nav filter from the side nav's clear link", async () => {
    const { user } = setup();
    render(<PromptBank />);
    const nav = sideNav();

    await user.click(within(nav).getByRole("button", { name: "Review a document" }));
    await user.selectOptions(within(nav).getByLabelText("Practice area"), "Real Estate");
    expect(screen.getByRole("button", { name: "Clear filters" })).toBeInTheDocument();

    await user.click(within(nav).getByRole("button", { name: "Clear filters" }));
    expect(within(nav).getByRole("button", { name: "All tasks" })).toHaveAttribute("aria-pressed", "true");
    expect(within(nav).getByLabelText("Practice area")).toHaveValue("");
    expect(screen.getByText("All prompts by task")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Clear filters" })).not.toBeInTheDocument();
  });

  it("opens and closes the mobile nav drawer, and auto-closes on selection", async () => {
    const { user } = setup();
    const { container } = render(<PromptBank />);

    expect(sideNav()).not.toHaveClass("open");
    expect(container.querySelector(".side-nav-backdrop")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open task and practice area navigation" }));
    expect(sideNav()).toHaveClass("open");
    expect(container.querySelector(".side-nav-backdrop")).toBeInTheDocument();

    await user.click(container.querySelector(".side-nav-backdrop")!);
    expect(sideNav()).not.toHaveClass("open");

    await user.click(screen.getByRole("button", { name: "Open task and practice area navigation" }));
    await user.click(within(sideNav()).getByRole("button", { name: "Draft something" }));
    expect(sideNav()).not.toHaveClass("open");
  });

  it("returns to the untouched home from the brand button in the side nav", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);
    expect(screen.queryByRole("heading", { name: "Every prompt your practice needs." })).not.toBeInTheDocument();

    await user.click(within(sideNav()).getByRole("button", { name: "The Legal Stack Prompt Bank home" }));
    expect(screen.getByRole("heading", { name: "Every prompt your practice needs." })).toBeInTheDocument();
    expect(within(sideNav()).getByRole("button", { name: "All tasks" })).toHaveAttribute("aria-pressed", "true");
  });

  it("searches from the header and opens a result", async () => {
    const { user } = setup();
    render(<PromptBank />);

    const search = screen.getByLabelText("Search prompts");
    await user.type(search, "estoppel{Enter}");

    expect(screen.getByRole("heading", { name: "“estoppel”" })).toBeInTheDocument();
    const card = screen.getByRole("button", { name: /Estoppel and SNDA review/ });
    await user.click(card);

    expect(screen.getByRole("heading", { name: "Estoppel and SNDA review" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "← Back to results" })).toBeInTheDocument();
  });

  it("shows lead-task suggestions when a search comes up empty, and follows one", async () => {
    const { user } = setup();
    const { container } = render(<PromptBank />);

    const search = screen.getByLabelText("Search prompts");
    await user.type(search, "zzzzzzz{Enter}");

    expect(screen.getByText("Nothing matched “zzzzzzz”")).toBeInTheDocument();
    // Scoped to the no-results panel — the side nav also has a same-named task button.
    const noResults = container.querySelector(".no-results") as HTMLElement;
    const suggestion = within(noResults).getByRole("button", { name: /Review a document/ });
    await user.click(suggestion);

    expect(screen.getByRole("heading", { name: "Review a document" })).toBeInTheDocument();
    expect(screen.getByText("M&A diligence risk matrix")).toBeInTheDocument();
  });

  it("filters results by practice area with the filter chips", async () => {
    const { user } = setup();
    const { container } = render(<PromptBank />);

    await user.type(screen.getByLabelText("Search prompts"), "checklist{Enter}");
    // Scoped to the results view's own chip row — the side nav also has an "All tasks" button.
    const chipRow = container.querySelector(".filter-chips") as HTMLElement;
    const chips = within(chipRow).getAllByRole("button");
    expect(chips.length).toBeGreaterThan(1);

    const onePractice = chips[1];
    const label = onePractice.textContent ?? "";
    await user.click(onePractice);

    const cards = screen.getAllByRole("button", { name: new RegExp("·") });
    for (const card of cards) {
      expect(within(card).getByText(new RegExp(label))).toBeInTheDocument();
    }
  });

  it("rewrites the generated prompt as the three essentials are filled in", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    await user.type(screen.getByLabelText("What are you working on?"), "Acquisition of a software company");
    await user.type(screen.getByLabelText("Who do we act for?"), "Buyer");

    const generated = screen.getByLabelText("Your prompt — editable") as HTMLTextAreaElement;
    expect(generated.value).toContain("MATTER: Acquisition of a software company");
    expect(generated.value).toContain("WE ACT FOR: Buyer");
  });

  it("adds more context behind the disclosure toggle and counts it", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    expect(screen.queryByLabelText("Client or principal party")).not.toBeInTheDocument();
    await user.click(screen.getByText("Add more context"));

    await user.type(screen.getByLabelText("Client or principal party"), "Acme Holdings");
    expect(screen.getByText("More context (1 added)")).toBeInTheDocument();

    const generated = screen.getByLabelText("Your prompt — editable") as HTMLTextAreaElement;
    expect(generated.value).toContain("FURTHER CONTEXT");
    expect(generated.value).toContain("Client / principal party: Acme Holdings");
  });

  it("flags missing facts as gaps until they are filled", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    expect(screen.getByText("Still missing — the AI will ask, or guess")).toBeInTheDocument();
    expect(screen.getByText("The matter or transaction")).toBeInTheDocument();

    await user.type(screen.getByLabelText("What are you working on?"), "Acquisition");
    expect(screen.queryByText("The matter or transaction")).not.toBeInTheDocument();
  });

  it("copies the generated prompt to the clipboard", async () => {
    const { user, writeText } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);

    await user.click(screen.getByRole("button", { name: /Copy prompt/ }));
    expect(writeText).toHaveBeenCalledTimes(1);
    expect(writeText.mock.calls[0][0]).toContain("TASK");
    expect(await screen.findByText("Copied to clipboard")).toBeInTheDocument();
  });

  it("reveals the underlying base instructions on request", async () => {
    const { user } = setup();
    const { container } = render(<PromptBank />);

    await openMaDiligence(user);

    // The base prompt also appears inside the generated-prompt textarea (by
    // design), so scope this check to the dedicated reveal panel.
    expect(container.querySelector(".base-instructions")).not.toBeInTheDocument();
    await user.click(screen.getByText("See the underlying instructions"));
    expect(container.querySelector(".base-instructions")).toHaveTextContent(/Act as deal counsel/);
  });

  it("tracks recently used prompts on the home screen", async () => {
    const { user } = setup();
    render(<PromptBank />);

    await openMaDiligence(user);
    await user.click(screen.getByRole("button", { name: "← Start over" }));

    const recent = screen.getByText("Recently used").closest("section")!;
    expect(within(recent).getByText("M&A diligence risk matrix")).toBeInTheDocument();
  });
});
