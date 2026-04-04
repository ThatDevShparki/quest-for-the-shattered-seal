---
publish: false
---

# Quest for the Shattered Seal

_Zephyrix Skydelver — Aarakocra Cleric 3 — Grainfall, Session 1_

---

## Characters

```dataview
TABLE status
FROM "Campaign Knowledge/Characters"
WHERE type = "character"
SORT file.name ASC
```

---

## Locations

```dataview
TABLE visited
FROM "Campaign Knowledge/Locations"
WHERE type = "location"
SORT file.name ASC
```

---

## Items

```dataview
TABLE possessed
FROM "Campaign Knowledge/Items"
WHERE type = "item"
SORT file.name ASC
```

---

## Clues

```dataview
TABLE decoded
FROM "Campaign Knowledge/Clues"
WHERE type = "clue"
SORT file.name ASC
```

---

## Organizations

```dataview
TABLE
FROM "Campaign Knowledge/Organizations"
WHERE type = "organization"
SORT file.name ASC
```

---

## Campaign Story

```dataview
TABLE chapter, arc
FROM "Campaign Notes/Story"
WHERE type = "story"
SORT chapter ASC
```

---

## Sessions

```dataview
TABLE session_number
FROM "Campaign Notes/Sessions"
WHERE type = "session"
SORT session_number ASC
```

---

## Open Questions

```dataview
TABLE priority, status, subject
FROM "Campaign Notes/Questions"
WHERE type = "question"
SORT choice(priority = "high", "1", choice(priority = "medium", "2", "3")) ASC
```

---

## Mystery Tracking

[[Mystery Dashboard|Mystery Dashboard]]

---

[[Campaign Knowledge/Index|Master Index]] · [[Campaign Notes/Questions/Index|Open Questions]] · [[Campaign Knowledge/Vault Database|Vault Database]]
