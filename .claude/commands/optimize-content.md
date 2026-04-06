---
name: optimize-content
description: Audit and optimize vault content organization, linking, and structure. Checks for misplaced content, missing entries, extraneous or missing backlinks, and structural issues. Creates placeholder entries for unlinked references. Confirms structural changes with user before modifying existing content.
---

You are auditing and optimizing content in a D&D 5.5e campaign vault for Dreamrot. The vault belongs to Zephyrix "Zeph" Skydelver.

Before doing anything:
1. Read CLAUDE.md at the vault root for conventions, guardrails, and structure
2. Determine the scope of the audit from the user's input

## Determining Scope

The user may specify scope in several ways:

- **"Optimize recent changes"** — Run `git diff` or `git diff HEAD~N` to identify recently modified files. Audit only those.
- **"Optimize session N"** — Audit all files tagged with or referencing session N.
- **"Optimize [specific file]"** — Audit that file and everything it links to.
- **"Optimize everything"** — Full vault audit.
- **No scope specified** — Ask the user what to audit before proceeding.

## Phase 1: Organization Audit

For each file in scope, check:

### Content Placement
- Is this content in the correct folder for its type? (Characters in Characters/, Locations in Locations/, etc.)
- Does the `type` in frontmatter match the folder it lives in?
- Are there sections in this document that belong in a different document? (e.g., a character document that contains a full scene that should be in Campaign Story)
- Are there documents that should be combined? (Two thin documents about the same subject)
- Are there documents that should be split? (A document covering two distinct subjects)

### Template Conformance
- Does the document have all required frontmatter fields per CLAUDE.md?
- Does the document have the sections prescribed by its template?
- Is it missing a Connections section? A Knowledge Tracker?
- Are Knowledge Tracker entries in the correct table (Known at Campaign Start vs Discovered During Campaign)?

### Content Quality
- Is the document's depth appropriate for what Zeph knows? (Thin documents for thin knowledge, rich documents for deep knowledge)
- Are "What He Does Not Know" sections populated? (These are load-bearing, not decorative)
- Does the prose match the voice established in review-prose guidelines?

**Report findings as a table:**

| File | Issue | Type | Action Needed |
|---|---|---|---|
| ... | ... | Placement/Template/Quality | Create/Move/Merge/Split/Update |

**For any structural changes to existing content (moving sections, merging documents, splitting documents), present the proposed change and ask the user to confirm before proceeding.**

## Phase 2: Link Audit

### Missing Links — Entities Mentioned But Not Linked

Search all files in scope for entity names that appear in prose but are not wrapped in `[[wiki-links]]`.

Check against all known entity names AND their aliases (from frontmatter `aliases` fields):
- Character names and aliases
- Location names and aliases
- Item names and aliases
- Clue names and aliases
- Organization names and aliases

**Linking density rule: one link per entity per paragraph.** If a paragraph already contains a wiki-link to a given entity, do not add another link to the same entity in that paragraph. The first mention gets the link. Subsequent mentions in the same paragraph stay as plain text.

For each unlinked mention found:
- If the entity has an existing document AND is not already linked in the same paragraph, add the wiki-link with full path and natural display text
- If the entity has an existing document but is already linked earlier in the same paragraph, skip it
- If the entity does NOT have an existing document, flag it for Phase 3

### Missing Links — Referenced Entities Without Documents

If a name appears in the prose that has no corresponding document anywhere in the vault, this is a missing entry. Examples:
- A character mentioned in passing ("the guard at the gate," "a woman named Elara")
- A location referenced but never documented ("the docks," "the northern road")
- An item or clue mentioned without its own file

Collect these into a list for Phase 3.

### Extraneous Links

Check for:
- Wiki-links that point to files that do not exist (broken links)
- Wiki-links that use bare filenames instead of full paths (ambiguous links)
- Self-links (a document linking to itself)
- Wiki-links in Knowledge Tracker table cells (convention says keep tables clean)
- Excessive linking density (the same entity linked more than once in a single paragraph). Reduce to one link per entity per paragraph, keeping the first occurrence.

### Link Consistency

Check for:
- The same entity linked with different display text in the same document without clear contextual reason
- Links using outdated aliases that do not appear in the target's frontmatter
- Links to files that have moved (path no longer valid)

**Fix all link issues directly (add missing links, fix broken paths, remove self-links, convert bare filenames to full paths). These do not require user confirmation.**

## Phase 3: Missing Entry Creation

For each entity referenced in prose but lacking a document:

1. Assess significance: Is this a passing mention ("a guard") or a named, recurring entity ("Tormund the blacksmith")?
2. **Passing mentions** — Do not create a document. These are color, not characters. Leave them unlinked.
3. **Named entities that appear more than once or carry narrative weight** — Create a placeholder document using the `/add-content` skill.

When invoking `/add-content` for placeholder entries:
- Provide the entity name, type, and the context in which it was mentioned
- The add-content skill will ask narrative questions to build appropriate depth
- Placeholder documents should be deliberately thin per vault conventions
- Tag with relevant mystery threads if the context implies a connection

**For each proposed new entry, briefly describe what would be created and ask the user to confirm before invoking add-content.** Example: "The name 'Elara' appears in Session 3 as someone Zeph spoke to at the market. Should I create a character entry for her?"

## Phase 4: Cross-Reference Verification

After all links are fixed and entries created:

### Connections Sections
- For each file in scope, verify its Connections section lists all entities it references in its prose
- Add any missing connection entries
- Remove any connection entries for entities no longer referenced

### Knowledge Trackers
- Verify tracker entries have session numbers where applicable
- Verify entries are in the correct table (Campaign Start vs During Campaign)
- Check for duplicate tracker entries

### Tags
- Verify mystery thread tags match the content. If a document now references Sae-th but is not tagged `mystery/saeth`, add the tag.
- Do not remove tags without user confirmation (the user may have tagged something for reasons not visible in the prose)

### Mystery Dashboard
- After all changes, note whether the Mystery Dashboard queries will reflect the updates (they will, since they read tags and links automatically)

## Phase 5: Report

Present a summary:

```
## Optimization Complete

### Files Modified
- [list of files with brief description of what changed]

### Files Created
- [list of new files created via add-content]

### Links Fixed
- [count] missing links added
- [count] broken links repaired
- [count] bare-filename links converted to full paths
- [count] self-links removed

### Structural Changes
- [list of any content moved, merged, or split — all confirmed by user]

### Remaining Issues
- [anything that could not be resolved automatically]
```

## Constraints

- **Links can be fixed without confirmation.** Adding a missing `[[wiki-link]]`, fixing a broken path, or removing a self-link is always safe.
- **Structural changes require confirmation.** Moving content between documents, merging documents, splitting documents, or deleting sections must be presented to the user first.
- **New entries require confirmation.** Before creating a new character/location/item document, describe what would be created and ask.
- **Do not rewrite existing prose.** This skill fixes structure and linking, not voice or style. Use `/review-prose` for prose quality.
- **Placeholder documents are thin.** A character mentioned once in passing gets a thin document. Do not pad.
- **All wiki-links use full paths** with natural display aliases.
- **Frontmatter follows CLAUDE.md schema exactly.**

$ARGUMENTS
