---
name: Agent Trace
description: A senior engineer's CV printed as the trace of one agent run, in a single terminal window on a near-black page.
colors:
  page: "#0b0d0e"
  window: "#141617"
  bar: "#1b1e1f"
  hairline: "#ffffff14"
  hairline-soft: "#ffffff0d"
  fg: "#c9d1d0"
  fg-bright: "#e8eeec"
  dim: "#7c8784"
  green: "#5ddc92"
  green-deep: "#2f7d55"
  amber: "#e8b06a"
  magenta: "#f2789f"
  blue: "#7cb8f0"
  light-red: "#ef6a5e"
  light-amber: "#f0bd3f"
  light-green: "#4fd065"
typography:
  display:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(31px, 6.6vw, 64px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  body:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "tabular-nums"
  meta:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.01em"
  label:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    letterSpacing: "0.16em"
rounded:
  hairline-control: "4px"
  focus: "2px"
  window: "11px"
  window-compact: "9px"
  dot: "50%"
spacing:
  step: "22px"
  step-compact: "18px"
  gutter-xs: "6px"
  gutter-sm: "10px"
  gutter-md: "18px"
  gutter-lg: "22px"
  bar-padding: "12px 18px"
  run-padding: "clamp(22px,3.4vw,34px) clamp(16px,3.2vw,32px) clamp(26px,3.6vw,38px)"
  art-padding: "20px 22px 22px"
  page-padding: "clamp(14px,3.4vw,52px) clamp(10px,3vw,28px)"
components:
  action-bracketed:
    textColor: "{colors.green}"
    typography: "{typography.body}"
    rounded: "{rounded.focus}"
  copy-control:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.meta}"
    rounded: "{rounded.hairline-control}"
    padding: "1px 7px"
  copy-control-hover:
    textColor: "{colors.fg}"
  copy-control-done:
    textColor: "{colors.green}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.meta}"
    rounded: "{rounded.hairline-control}"
    padding: "2px 8px"
  window:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.window}"
    width: "952px"
  window-bar:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.dim}"
    typography: "{typography.meta}"
    padding: "{spacing.bar-padding}"
  section-label:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
  artifact-card:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "{spacing.art-padding}"
    rounded: "0px"
---

# Design System: Agent Trace

## Overview

**Creative North Star: "The Agent Trace"**

The page is one terminal window on a near-black ground, and everything inside it is the printed output of a single command. The CV is not described as an agent run; it *is* one. Roles are tool calls that returned `✓ 200 OK`, projects are the artifacts the run produced, the stack is its config block, and the page ends at `$ exit 0`. The register is the category's familiar terminal look, taken deliberately and executed at full fidelity — no irony, no smuggled quirk, no hedge toward a safer look. It is a user-pinned world supplied as a finished reference artifact, and it is the committed system.

Density is high and even. One monospace family does all the work at three sizes; hierarchy is carried by weight and colour, so the page reads as a continuous transcript rather than a stack of designed blocks. There is exactly one container — the window — and nothing nests inside it. Surfaces are flat; separation is done with hairlines at 8% white and with the two-step tonal lift from page to window to bar. Colour is semantic rather than decorative: a reader who learns that green means action and amber means string can predict every subsequent use.

The world refuses the centred headline, the hero metric, the timeline, and the shadowed card. Its one authored motion is the run printing itself — a short staggered emerge across the first-viewport children — plus the cursor blink and the single breathing status dot. Everything else is still.

**Key Characteristics:**
- One window, one family, one accent vocabulary; no second container anywhere.
- Three type roles only — display, body, meta — with weight and colour carrying hierarchy.
- Semantic colour: green = identity/success/action, amber = strings, magenta = artifact names, blue = config keys, dim = comments and meta.
- Flat surfaces, hairline rules, tonal layering instead of shadows.
- One authored motion moment, behind `prefers-reduced-motion: no-preference`; the default state is fully visible.
- Content-driven markup: everything the page says comes from one data module.

## Colors

A near-black ground with a cool grey-green text body and four saturated terminal accents, each bound to a meaning rather than to a mood.

### Primary
- **Signal Green** (`{colors.green}`): identity, success, and every action. It is the cursor block, the `agent` and `exit` command verbs, the `work` function name, the filled status dot, the `✓ 200 OK` return, the bracketed `book a call` action, every artifact `→` link, and the focus ring. If something on this page can be clicked or has succeeded, it is green.
- **Deep Green** (`{colors.green-deep}`): the low-saturation companion. Hollow status-dot borders, the `::selection` background, and the confirmed border on the copy control. Never used for text.

### Secondary
- **String Amber** (`{colors.amber}`): string literals wherever they appear — the quoted task in the command line, company and role arguments in a `work(...)` signature, config values in `stack.yaml` — plus the title line under the name, which is read as the run's first string output.

### Tertiary
- **Artifact Magenta** (`{colors.magenta}`): artifact names only. The three project headings in the output listing, and nothing else.
- **Config Blue** (`{colors.blue}`): config keys only. The left-hand keys of `stack.yaml`, and nothing else.

### Neutral
- **Trace Ground** (`{colors.page}`): the page outside the window, and the `theme-color`.
- **Window Ground** (`{colors.window}`): the single container's fill. All measured contrast is taken against this.
- **Bar Ground** (`{colors.bar}`): the window chrome strip, one tonal step above the window.
- **Output Grey** (`{colors.fg}`): body copy, result lines, artifact prose, contact links at rest. Measured 11.68:1 on the window ground.
- **Output Bright** (`{colors.fg-bright}`): the name only. The brightest value on the page, used once.
- **Comment Dim** (`{colors.dim}`): comments, section labels, `$` prompts, punctuation inside signatures, dates and locations, chips, the copy control at rest, and the brackets around the action. Measured 4.89:1 — it is a legible muted tier, not a decorative one, and it must not drop further.
- **Window Lights** (`{colors.light-red}`, `{colors.light-amber}`, `{colors.light-green}`): the three chrome dots, which are chrome and carry no state.
- **Hairline** (`{colors.hairline}`) and **Hairline Soft** (`{colors.hairline-soft}`): all borders and dividers — window edge, bar underline, artifact column rules, chip and control strokes.

### Named Rules
**The Semantic Colour Rule.** Every accent is bound to a meaning, not a position. Green is identity, success and action; amber is a string; magenta is an artifact name; blue is a config key; dim is a comment. A new element inherits the colour its *meaning* already owns, and never takes an accent for emphasis alone.

**The One Green Action Rule.** Green is the only actionable colour. There is no second accent for secondary actions and no coloured hover state outside green. Secondary actions stay Output Grey and earn green on hover.

**The Dim Floor Rule.** Comment Dim at 4.89:1 is the floor for text on the window ground. Nothing on this page is set lighter or lower than it, and no new tier is introduced below it.

## Typography

**Display Font:** JetBrains Mono Variable (self-hosted, with `JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`, `monospace` fallbacks)
**Body Font:** the same family
**Label/Mono Font:** the same family

**Character:** One self-hosted variable monospace for the entire page. It is the material of the world — the type does not represent a terminal, it is the terminal — and the variable axis lets weight carry hierarchy without ever introducing a second face. Numerals are tabular everywhere, so the date ranges in five tool-call signatures align into a column on their own.

### Hierarchy
- **Display** (700, `clamp(31px,6.6vw,64px)`, 1.12, -0.012em, Output Bright): the name, once, as the run's first output. A blinking green block cursor sits hard against its final character.
- **Body** (400, 15px — 13.5px at ≤780px, 1.75): everything that is prose or output. Summary paragraph at a 68ch measure, result lines, artifact copy, the command line, the title line, the config block, the exit line.
- **Meta** (400, 12.5px — 11.5px at ≤780px, 1.75): the window bar title, date/location suffixes in signatures, the return status line, chips, the copy control, the artifact context line.
- **Label** (400, 12.5px, 0.16em — 0.13em at ≤780px, uppercase, Comment Dim): the three `// …` section labels, each trailed by a dotted hairline that fills the remaining width.

Weight is binary: 400 for everything, 700 for the name, command verbs, function names, and artifact headings. There is no 500 or 600 tier.

### Named Rules
**The Three Roles Rule.** The page has exactly three sizes — display, body, meta — and one family. A new element picks one of the three; it does not get a size between them, a fourth step, or a second face. Hierarchy is produced by weight (400/700) and by semantic colour, never by a new size.

**The Tabular Rule.** `font-variant-numeric: tabular-nums` is global. Dates, versions and counts align in a monospaced column without per-element opt-in, and nothing turns it off.

## Layout

A single centred window, max 952px, on a page padded `clamp(14px,3.4vw,52px)` vertically and `clamp(10px,3vw,28px)` horizontally. The window has two regions: a 12px/18px chrome bar, and the run body padded `clamp(22px,3.4vw,34px)` top, `clamp(16px,3.2vw,32px)` sides, `clamp(26px,3.6vw,38px)` bottom.

Vertical rhythm comes from one variable, `--step` (22px; 18px at ≤780px), and its multiples: `step` between first-viewport blocks, `step × 0.9` below a section label, `step × 1.3` between tool-call entries, `step × 2` above the exit line, `step × 2.1` above a section label. Nothing uses an ad-hoc vertical margin above the 12px scale; small internal offsets (2px, 6px, 9px, 12px, 16px, 18px) are local to a component.

Prose is capped at 68ch with `text-wrap: pretty`. Tool calls use a two-column grid — a fixed 22px status gutter and a fluid content column — so every signature, result list and return line starts on the same optical axis. Result lines are themselves a 2.2ch-plus-fluid grid, which hangs the `↳` marker outside the text block. Artifacts are three equal fluid columns divided by vertical hairlines, with the first and last columns flush to the window padding so the grid reads as a ruled table rather than a row of cards.

**Responsive:** one breakpoint, 780px. Both type roles step down, `--step` drops to 18px, label tracking loosens to 0.13em, the artifacts grid collapses to one column and swaps vertical rules for horizontal ones, the config block drops its horizontal scroll and wraps with a 2ch hanging indent, the prose cap is released, and the window radius tightens to 9px.

### Named Rules
**The Single Container Rule.** There is one window and nothing nests inside it. New regions are separated by hairlines, section labels and rhythm — never by a second panel, card, or inset surface.

**The Step Rhythm Rule.** All block-level vertical space is a multiple of `--step`. A new section gets `step × 2.1` above its label and `step × 0.9` below it.

## Elevation & Depth

This system has no drop shadows and no gradients. Depth is tonal and linear: three greys (page `#0b0d0e` → window `#141617` → bar `#1b1e1f`) stack the page in three planes, and every boundary within the window is a 1px hairline at 8% white. The window's only edge treatment is a hairline border plus its 11px radius.

### Shadow Vocabulary
- **Running Halo** (`box-shadow: 0 0 0 4px #5ddc9221`, breathing to `0 0 0 7px #5ddc9210`): a zero-offset green ring on the one filled status dot that marks the currently running role. It is a glow bound to live state, not an elevation device, and it is the only `box-shadow` in the build.

### Named Rules
**The No-Lift Rule.** Nothing on this page is lifted. No offset shadow, no gradient, no blur-based elevation. The only shadow permitted is a zero-offset accent ring expressing live state.

## Shapes

Rectangles with hairline edges. Radius is used at three scales and nowhere else: 11px on the single window (9px at ≤780px), 4px on hairline-bordered micro-controls (chips, the copy control), 2px on the focus ring, and full circles for the three chrome lights (11px), the status dots (11px) and the return pip (7px). Artifact cells, the config block and all text blocks have no radius at all — their boundaries are rules, not corners.

Typographic marks are part of the form language because they are native output of the world: the `$` prompt, `//` comment labels, `↳` result markers, `→` link arrows, `✓` returns, `(`/`)`/`=` signature punctuation, `{`/`}`/`[`/`]` config delimiters, and the bracketed `[ … ]` frame around the primary action. Each is a real character in the page's one family, coloured by the Semantic Colour Rule.

## Components

### Buttons
- **Shape:** the primary action is not a filled button. It is a green text link framed by dim `[ ` and ` ]` pseudo-element brackets with a trailing `→`, set at body size.
- **Primary (`[ book a call → ]`):** Signal Green text, dim brackets, no background, no radius, `white-space: nowrap`. It appears twice — in the first-viewport contact row and on the `$ exit 0` line.
- **Hover / Focus:** on hover the brackets turn green so the whole frame lights as one object; the underline stays suppressed. Focus is the global 2px green ring at 3px offset, 2px radius.
- **Secondary (contact links):** Output Grey text with a transparent 1px bottom border that becomes green on hover, transitioning colour and border over 0.18s.

### Chips
- **Style:** transparent fill, 1px hairline border, 4px radius, `2px 8px` padding, meta size, Comment Dim text.
- **State:** static. Chips name an artifact's stack and are never selectable or interactive.

### Cards / Containers
- **The window** is the only container: Window Ground fill, 1px hairline border, 11px radius, `overflow: hidden`, max 952px, centred.
- **Artifact cells** are not cards. No fill, no radius, no shadow; `20px 22px 22px` padding and a 1px left hairline, with the first cell dropping its rule and left padding and the last dropping its right padding. Depth comes from the Elevation section's tonal model alone.

### Inputs / Fields
- **The copy control** is the one form element: transparent fill, 1px hairline border, 4px radius, `1px 7px` padding, meta size, Comment Dim label reading `copy`, inheriting the page font. Hover brightens the label to Output Grey and the border to 18% white. On success it flips to `copied` in Signal Green with a Deep Green border, reverting after 2.2s; with no clipboard access it reads `selected` and selects the address instead.

### Window Chrome
A Bar Ground strip with a hairline underbar, 14px gap, holding three 11px circular lights (red, amber, green, decorative and stateless) and a meta-size dim title in `user@host — program` form.

### Tool Call
The signature component for experience. A 22px status gutter carries an 11px dot — hollow with a Deep Green border when the call has returned, filled Signal Green with a breathing halo when it is running. The content column holds a `work("Company", role="Role")` signature in which the function name is bold green, punctuation and the `role=` keyword are dim, and both string arguments are amber, followed by an inline meta-size dim `from → to · where`. Below it, a result list where each line hangs a dim `↳` in a 2.2ch gutter. The entry closes on a meta-size green return: `✓ 200 OK` for completed calls, or a 7px green pip plus `running` for the live one.

### Section Label
`// lowercase words · separated by middots` set in meta size, uppercased by CSS, tracked to 0.16em, Comment Dim, with a dotted 15%-white rule filling the remaining width. One per region; the only structural divider between regions.

### Config Block
A one-line-per-entry grid with a 1px gap, keys in Config Blue, values in String Amber, and `:`, `{}`, `[]` delimiters in Comment Dim. It scrolls horizontally rather than wrapping on wide screens; at ≤780px it wraps with a 2ch hanging indent so continuation lines align under the value.

### Motion
One authored moment: `emerge` (opacity 0→1, 7px rise, 3px blur clearing) over 0.42s on `cubic-bezier(.16,1,.3,1)`, staggered across the five first-viewport children at 0.06/0.11/0.16/0.21s. Supporting: a 1.15s step-ease cursor blink, and a 2.4s halo breathe on the running dot. Micro-interactions are 0.18s colour/border transitions and a 0.22s 3px arrow nudge on the same ease. All of it lives inside `@media (prefers-reduced-motion: no-preference)`; the un-animated page is the fully visible default.

## Do's and Don'ts

### Do:
- **Do** use the three type roles only — display `clamp(31px,6.6vw,64px)`, body 15px, meta 12.5px — in the one JetBrains Mono Variable family, and carry all hierarchy with weight (400/700) and semantic colour.
- **Do** bind every accent to its meaning: green for identity/success/action, amber for strings, magenta for artifact names, blue for config keys, dim for comments and meta.
- **Do** keep all block spacing on multiples of `--step` (22px; 18px at ≤780px).
- **Do** separate regions with hairlines (`#ffffff14`), `// …` section labels and rhythm.
- **Do** let the one data module drive the page: adding a role, an artifact or a config line is one edit in `src/data/profile.ts`, and the markup stays generic over it.
- **Do** put new motion behind `prefers-reduced-motion: no-preference` and make the un-animated state the complete one.
- **Do** keep the whole page on one breakpoint at 780px.
- **Do** theme browser surfaces from the palette: `color-scheme: dark`, `::selection` in Deep Green, `scrollbar-color: #2b3130` on the page ground, and a 2px Signal Green `:focus-visible` ring at 3px offset.

### Don't:
- **Don't** add a second type face, a fourth size step, or a weight between 400 and 700.
- **Don't** nest a second container, card, panel or inset surface inside the window.
- **Don't** add an offset drop shadow or a gradient. The only permitted shadow is a zero-offset accent ring expressing live state.
- **Don't** introduce a second actionable colour or a non-green hover state.
- **Don't** use an accent for emphasis alone, or reuse magenta or blue outside artifact names and config keys.
- **Don't** set text below Comment Dim's 4.89:1 on the window ground.
- **Don't** add emoji, or raster/decorative imagery inside the window.
- **Don't** hard-code copy into the markup when it belongs in the data module.
