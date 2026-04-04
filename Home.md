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
SORT choice(priority, "high", 1, "medium", 2, "low", 3) ASC
```

---

---

## Mystery Threads

### The Dawnmere Bloodline
```dataview
LIST FROM #mystery/dawnmere
SORT file.name ASC
```

### The Visage
```dataview
LIST FROM #mystery/visage
SORT file.name ASC
```

### The Architect
```dataview
LIST FROM #mystery/architect
SORT file.name ASC
```

### Sae-th
```dataview
LIST FROM #mystery/saeth
SORT file.name ASC
```

### The Four Symbols
```dataview
LIST FROM #mystery/symbols
SORT file.name ASC
```

### The Brothers
```dataview
LIST FROM #mystery/brothers
SORT file.name ASC
```

### The Dreamrot
```dataview
LIST FROM #mystery/dreamrot
SORT file.name ASC
```

### Ari's True Nature
```dataview
LIST FROM #mystery/ari
SORT file.name ASC
```

### The Lost Civilization
```dataview
LIST FROM #mystery/ruin
SORT file.name ASC
```

---

[[Campaign Knowledge/Index|Master Index]] · [[Campaign Notes/Questions/Index|Questions Index]] · [[Campaign Knowledge/Mystery Web|Mystery Web]]
