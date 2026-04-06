---
name: add-content
description: Add new campaign content from a free-form description. Creates characters, locations, items, clues, and organizations from templates. Updates session notes and Campaign Story chapters. Asks narrative questions to build depth before writing.
---

You are adding new content to a D&D 5.5e campaign vault for Dreamrot. The vault belongs to Zephyrix "Zeph" Skydelver.

Before doing anything:
1. Read CLAUDE.md at the vault root for conventions, guardrails, and structure
2. Read the review-prose skill at `.claude/commands/review-prose.md` for prose guidelines
3. Read existing Campaign Story chapters to understand current narrative position
4. Check which session is current by reading the latest session file

## Phase 1: Parse the Prompt

Read the user's input and identify:

- **Named characters** — Check `Campaign Knowledge/Characters/` for existing files. If no file exists, this is a new character.
- **Named locations** — Check `Campaign Knowledge/Locations/` for existing files. If no file exists, determine if it is a sub-location of an existing place or somewhere new.
- **Items, clues, organizations** — Check the appropriate folders.
- **Session number** — If specified, this determines which session file to create or update.
- **Events** — Anything that happened that needs canonical narration in the Campaign Story.

Report back what you found: "I see [N] new characters, [N] new locations, [N] events. Here is what I need to ask before I can write this well."

## Phase 2: Ask Narrative Questions

Select 3-5 questions per new entity or event. Do NOT ask all questions from every framework. Choose based on what the prompt already provides and what is missing.

**Selection logic:**
- Prompt already has sensory detail? Skip sensory questions.
- Prompt already states Zeph's feelings? Skip emotional questions.
- Prompt is thin (just names and actions)? Ask Tier 1 and Tier 2.
- Prompt is rich but disconnected from existing threads? Ask Tier 3.
- Always ask: "What changed for Zeph?" (the before-and-after test)

**The "Offer, Don't Interrogate" principle:** When a question might get a thin answer, present 2-3 concrete options. "Was this someone who commanded attention when they entered, or someone you might overlook, or something else entirely?" is better than "What did they look like?"

Use AskUserQuestion to ask these. Group related questions together (all character questions in one ask, all location questions in another) rather than asking one at a time.

### New Character Questions (select 3-5)

- What is the first thing Zeph notices about this person? (The first detail is a character statement about Zeph as much as the NPC.)
- What does their voice sound like, or how do they carry themselves? Not a physical checklist. "She spoke like someone accustomed to being believed" does more than height and hair.
- What is Zeph's gut reaction? Does he trust them, distrust them, feel curious, feel cautious?
- Is there anything unexpected about them, something that does not fit? A guard who quotes poetry. A merchant who flinches at loud noises. The incongruity is where character lives.
- Does this person remind Zeph of anyone? (Aeralon's precision, Sylara's warmth, Brenvaal's steadiness, the Architect's careful smile)
- What does Zeph NOT know about this person that he wishes he did?
- Does this character know something Zeph needs, or want something from Zeph?
- Does this character connect to any existing mystery thread?

### New Location Questions (select 3-5)

- What sense dominates this space? (The smell of wet stone. The silence. The heat. The visual chaos of a market.) One dominant sense anchors the reader.
- What is the first specific thing Zeph sees? Not "a room" but "a room where the ceiling tiles have been removed."
- What is wrong here, or what is unexpected? Something in the setting that does not fit gives the location character.
- How does Zeph feel here? Safe, uneasy, curious, reverent, claustrophobic?
- What would Zeph's training notice that a layperson would miss? He reads rooms. His father taught him. His scholarly eye catches things.
- Does this place remind him of anywhere? The Observatory? Aeralon's study? A description from a text?
- Is this a sub-location of somewhere existing (a district of Grainfall, a room in the ruin) or somewhere entirely new?
- Will Zeph return here, or is this a one-time passage?

### New Event Questions (select 3-5)

- What was at stake? What could Zeph have gained or lost?
- How did it feel, moment to moment? Not the outcome, but the experience.
- What is the most vivid sensory detail from this moment?
- Was there a moment of unexpected warmth or quiet in the middle of it? (Contrast carries weight.)
- What did Zeph believe or feel BEFORE this event vs AFTER? The delta is the narrative purpose.
- Did Zeph make a choice? Choices reveal character more than anything else.
- What question does this scene answer? What NEW question does it open?
- Did anything happen that Zeph saw but does not yet understand?

### New Clue Questions (select 3-5)

- Can Zeph read or understand it, or is it partially or fully opaque?
- What does his training tell him about it?
- Does this confirm, complicate, or contradict something he already believed? (Complicates is the richest.)
- Does this echo any existing clue? (Sae-th script, the Four Symbols, the Brothers, the Dawnmere crest)
- Is this personal to Zeph (character scope), part of the world mystery (campaign scope), or both?

### Session Recap Questions (select 4-6)

- What happened chronologically? Bullet points, bare facts.
- What was the emotional arc for Zeph? How did he feel at the start, middle, and end?
- What was the single most important moment?
- What does Zeph now know that he did not before?
- Were any existing questions answered? What new ones opened?
- Did anything happen that the player knows the significance of but Zeph does not? (Player-knowledge items get tagged but do NOT appear in Zeph-perspective prose.)

## Phase 3: Create and Update Documents

After gathering answers, create and update all relevant vault documents.

### New Documents

Create from the appropriate template in `Templates/`. Place in the correct folder.

**Frontmatter:**
- `type`: from template
- Status fields (`status`, `visited`, `possessed`, `decoded`): infer from context
- `aliases`: short names and references used in the prompt
- `tags`: infer mystery thread tags from content. Do NOT ask about tags.
- `dm_source`: leave empty unless specified
- `image`: leave empty
- `publish: false`

**Prose sections:**
- Write from Zeph's perspective per review-prose guidelines
- Ground in physical space. Show, do not tell. Vary sentence rhythm.
- Use full-path wiki-links with natural display aliases throughout
- Fill "What He Does Not Know" deliberately. This is load-bearing.

**Connections section:**
- Bullet list of full-path wiki-links to all related entities

**Knowledge Tracker:**
- Add initial entries in "Discovered During Campaign" table with session number and source

### Session Note

If a session number is specified:
- Check if `Campaign Notes/Sessions/Session N.md` exists
- If not, create from `Templates/New Session.md` with session_number populated
- If yes, update the existing file in the appropriate sections
- Sections to fill: What Happened, What He Learned, What Changed, Connections, Knowledge Tracker
- Add wiki-links to all entities referenced

### Campaign Story

Determine whether the events extend an existing chapter or warrant a new one:
- Read the current latest chapter to understand where the narrative stands
- If the events continue the same arc, append to the existing chapter
- If the events begin a new arc or a significant new phase, create a new chapter from `Templates/New Story Chapter.md`
- Set `chapter` number (increment from latest) and `arc` name
- Write prose per review-prose conventions: ground in space, show through action and sensation, vary rhythm, respect the epistemic frame
- Full wiki-links throughout

### Existing Documents

For any existing character, location, item, clue, or organization referenced in the new content:
- Add a row to their "Discovered During Campaign" knowledge tracker table
- Update Connections section if new relationships emerged
- Do NOT rewrite existing prose sections
- Update `tags` in frontmatter if the document now connects to a new mystery thread

## Phase 4: Link and Verify

After all files are created and updated:
1. Verify all wiki-links use full paths and resolve to existing files
2. Check that no new documents use bare filenames in links
3. List all files created and modified for the user to review
4. If any prose was written, note which sections the user should review for voice consistency

## Constraints

- All prose from Zeph's perspective, third person, no em dashes
- Wiki-links use full paths: `[[Campaign Knowledge/Characters/Name|display text]]`
- Frontmatter follows the schema in CLAUDE.md exactly
- New documents default to `publish: false`
- Mystery thread tags are INFERRED from content, never asked about
- Questions are narrative-driven, not administrative
- Select questions dynamically based on what the prompt already provides
- The before-and-after test applies to every event
- Thin documents for thin encounters. Do not pad.
- If Zeph barely interacted with someone, the document is correctly brief.

$ARGUMENTS
