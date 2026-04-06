# CLAUDE.md — Quest for the Shattered Seal

This is an Obsidian vault for a D&D 5.5e campaign called **Dreamrot**. The vault is a player knowledge base for **Zephyrix "Zeph" Skydelver**, an Aarakocra Cleric (Knowledge Domain) Level 3. It is NOT a GM vault. It tracks what Zeph knows, suspects, and feels — not the full truth of the world.

---

## How to Use This Vault

### Before Doing Anything

1. Read `Home.md` — the dashboard shows the current state of every document type
2. Read `Campaign Knowledge/Index.md` — the master index with tracker status
3. Read `Campaign Notes/Questions/Index.md` — the consolidated open questions list
4. Read the relevant documents for whatever you are working on

### Creating New Documents

Always use the templates in `Templates/`. There are 8:

- `New Story Chapter.md` — for new canonical narrative chapters (the source of truth for what happened)
- `New Character.md` — for any NPC, entity, or figure Zeph encounters
- `New Location.md` — for any place
- `New Item.md` — for any object of significance
- `New Clue.md` — for any piece of evidence, inscription, or discovery
- `New Organization.md` — for any faction, lineage, or group
- `New Session.md` — for session notes after each game
- `New Question.md` — for individual open questions Zeph is carrying

Templates use Templater syntax (`<% tp.file.title %>`). They include frontmatter, section structure, knowledge trackers, and Connections sections.

### Updating Existing Documents

When the campaign reveals new information:

1. **Update Campaign Story first.** New events go into the appropriate Story chapter, or create a new chapter. Story is the canonical source of truth for what happened.
2. Add a row to the relevant document's **Knowledge Tracker** table
3. Update the narrative sections of character/location/item/clue docs if new information changes what Zeph knows. These are reference profiles, not the primary narrative.
4. Add new `[[wiki-links]]` to any newly relevant entities
5. Update `tags:` in frontmatter if the document now connects to a new mystery thread
6. Update `Campaign Notes/Questions/Index.md` if a question is answered or a new one opens
7. Update `Campaign Knowledge/Index.md` tracker status if entry counts change

---

## Guardrails

These are non-negotiable. Every one of them exists because of a specific decision made during character creation.

### Voice and Perspective

- **Every document is written from Zeph's perspective.** Third person ("he"), not first person. What he knows, what he does not know, what he feels. Never omniscient. Never clinical.
- **No em dashes.** This is a deliberate stylistic choice. Use commas, periods, or restructure the sentence.
- **Gaps are named, not papered over.** If Zeph does not know something, say so explicitly. Do not invent content to fill gaps. A thin document about something Zeph barely understands is correct. Making it thicker is wrong.
- **The not-knowing is as important as the knowing.** "What He Does Not Know" sections are load-bearing, not decorative.

### Knowledge Separation

- **Player knowledge and character knowledge are kept separate.** Some things the player knows that Zeph does not. These are marked with the `player-knowledge` tag. Never let player knowledge leak into Zeph-perspective prose.
- **Known example:** Ari is actually Sylara's familiar. Zeph believes Ari was Aeralon's familiar. Documents written from Zeph's perspective must reflect what Zeph believes, not what the player knows.
- **Never resolve a mystery.** If Zeph does not know the answer, neither does the document. Do not speculate beyond what Zeph would speculate. Do not connect dots he has not connected.

### Document Integrity

- **Do not create documents the campaign has not earned.** If Zeph has not encountered an NPC, that NPC does not get a document. If a location has not been visited or referenced, it does not exist in the vault.
- **Deliberately thin documents stay thin.** Sylara Dawnmere's document is thin because Zeph barely knew her. Grainfall's document is thin because he has been there three days. Do not pad them.
- **Knowledge trackers are append-only during a session.** New rows are added. Old rows are not modified unless the campaign explicitly contradicts them.

### Formatting and Structure

- **Frontmatter is required on every document.** Follow the schema exactly:
  - Story chapters: `type`, `chapter`, `arc`, `tags`
  - Characters: `type`, `status`, `aliases`, `tags`
  - Locations: `type`, `visited`, `aliases`, `tags`
  - Items: `type`, `possessed`, `aliases`, `tags`
  - Clues: `type`, `decoded`, `scope`, `aliases`, `tags`
  - Organizations: `type`, `aliases`, `tags`
  - Sessions: `type`, `session_number`, `tags`
  - Questions: `type`, `priority`, `status`, `scope`, `subject`, `session_introduced`, `tags`
  - Indexes: `type`
- **Wiki-link every meaningful mention of a known entity.** Use display text for readability: `[[Aeralon Ashdelve|Aeralon]]`. Link the first mention of each entity per paragraph. Subsequent mentions in the same paragraph stay as plain text. Never self-link (a document must not link to itself).
- **Tags are for mystery threads and narrative weight only.** Do not duplicate what frontmatter fields already express. See the tag taxonomy below.

---

## Tag Taxonomy

Tags go in the frontmatter `tags:` array. They track which mystery threads a document is relevant to.

### Mystery Threads

```
mystery/dawnmere    — The Dawnmere bloodline and its ancient origins
mystery/visage      — The entity in the ceremonial room
mystery/architect   — The figure at Sylara's bedside
mystery/saeth       — The lost language and what it binds
mystery/symbols     — The Four Symbols and their bearers
mystery/brothers    — The unnamed Brothers
mystery/dreamrot    — The infection consuming Zeph
mystery/ari         — Ari's true nature and what it carries
mystery/ruin        — The civilization that built the sealed ruin
```

### Narrative Weight

```
turning-point       — Major revelation or shift
thread/open         — Unresolved narrative thread
thread/closed       — Thread resolved
player-knowledge    — Player knows this, Zeph does not
```

### What NOT to Tag

Do not use tags for things already in frontmatter fields:

- `type: character` replaces `#character`
- `status: deceased` replaces `#deceased`
- `decoded: false` replaces `#clue/undecoded`
- `priority: high` replaces `#priority/high`

### Scope Classification

The `scope` frontmatter property classifies whether a question or clue is personal to Zeph or part of the broader world mystery.

**Valid values:**

- `character` — Personal to Zeph. His body, his parents, his familiar, his direct emotional experience.
- `campaign` — World-level mystery. Ancient entities, lost languages, sealed ruins, unknown civilizations.
- `both` — Sits at the boundary. Personal to Zeph AND structurally important to the world (e.g., the Dawnmere lineage is his blood and an ancient world structure).

**Classification guidance:**

- If the question or clue would exist regardless of Zeph's involvement, it is `campaign`.
- If the question or clue is about Zeph's body, family, familiar, or direct emotional experience, it is `character`.
- If removing Zeph from the equation would change the nature of the question but not eliminate it, it is `both`.

---

## Vault Structure

```
Home.md                              — Dashboard (Dataview-powered)
Campaign Knowledge/
  Index.md                           — Master index with tracker status
  Characters/                        — 7 files (Zeph, parents, allies, entities)
  Locations/                         — 3 files (Grainfall, Observatory, Sealed Ruin)
  Items/                             — 2 files (Journal, Amulet)
  Clues/                             — 3 files (Sae-th, Brothers, Four Symbols)
  Organizations/                     — 2 files (Dawnmere Lineage, Orryn Society)
Campaign Notes/
  Story/                             — Canonical linear narrative (source of truth)
    01 - The Origin.md               — Birth, Sylara, the Architect, childhood
    02 - The Descent.md              — Aeralon's change, death, the journal, the decision
    03 - Arrival in Grainfall.md     — Observatory, sealed ruin, ceremonial room
    04 - The Ritual.md               — The ritual, the Visage, the flight, the arrest
    05 - The Cell.md                 — Ari's emergence, the amulet, the present state
  Mystery Dashboard.md               — Auto-updating investigation board (Dataview + DataviewJS)
  Sessions/                          — Session notes (Session 0, Session 1)
  Questions/
    Index.md                         — Consolidated open questions
Templates/                           — 8 Templater templates
Resources/
  character_sheet.pdf                — Zeph's character sheet (source of truth for mechanics)
```

### Architecture Principle

**Campaign Story is the canonical source of truth for what happened.** It is the linear narrative, told from Zeph's perspective, organized by arc and chapter. As the campaign progresses, existing chapters grow and new chapters are added.

**Character, location, item, clue, and organization documents are reference profiles.** They analyze, describe, and track knowledge about their subject. They link to Campaign Story for the full narrative of events. They do not retell stories that the Story chapters already contain.

**The Mystery Dashboard is automatic.** It reads tags and links from all documents and builds its views from that data. When you tag a document with a mystery thread or add wiki-links, the dashboard updates itself. No manual dashboard maintenance is needed. The dashboard lives at `Mystery Dashboard.md` and uses DataviewJS for the overview table and thread overlap matrix, and standard Dataview queries for per-thread tables.

**The Vault Database (Bases view)** is a native Obsidian filterable table at `Campaign Knowledge/Vault Database.base`. It reads frontmatter properties directly and allows interactive filtering, sorting, and grouping.

---

## Key Facts

- **Campaign:** Dreamrot
- **DM:** storm (Discord)
- **System:** D&D 5.5e (2024 PHB) with 5e subclasses allowed
- **Current session:** Pre-campaign. Session 1 begins in a jail cell in Grainfall.
- **Character sheet PDF is the mechanical source of truth.** Do not correct ability scores, spell DCs, or skill bonuses based on calculation. Trust the sheet.
- **Plugins expected:** Dataview, Templater, Calendarium (may not be installed yet)
- **Home rules:** Materials optional for casting, Nat 20 initiative = choose position, Potion as action = full benefit OR action + free Dodge
