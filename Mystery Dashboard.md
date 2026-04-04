---
type: index
publish: false
---

# Mystery Dashboard

_Auto-updating investigation board. Powered by tags, links, Dataview, and Juggl._

---

## The Web

_All mysteries radiating from Zeph. Requires the Juggl plugin._

```juggl
local: Zephyrix Skydelver
layout: force-directed
height: 600px
autoZoom: true
navigator: true
limit: 50
```

---

## Overview

```dataviewjs
const threads = [
  { tag: "#mystery/dawnmere", name: "The Dawnmere Bloodline" },
  { tag: "#mystery/visage", name: "The Visage" },
  { tag: "#mystery/architect", name: "The Architect" },
  { tag: "#mystery/saeth", name: "Sae-th" },
  { tag: "#mystery/symbols", name: "The Four Symbols" },
  { tag: "#mystery/brothers", name: "The Brothers" },
  { tag: "#mystery/dreamrot", name: "The Dreamrot" },
  { tag: "#mystery/ari", name: "Ari's True Nature" },
  { tag: "#mystery/ruin", name: "The Lost Civilization" }
];

let rows = [];
for (let t of threads) {
  let pages = dv.pages(t.tag);
  let count = pages.length;
  let threadTags = pages.flatMap(p => (p.file.tags || []).filter(tag => String(tag).startsWith("#mystery/") && String(tag) !== t.tag));
  let crossLinks = [...new Set(threadTags)].length;
  rows.push([t.name, count, crossLinks]);
}

dv.table(
  ["Thread", "Documents", "Cross-Thread Links"],
  rows
);
```

---

## Open Questions

```dataview
TABLE core_question AS "Core Question", priority, status
FROM "Campaign Notes/Questions"
WHERE type = "question"
SORT choice(priority = "high", "1", choice(priority = "medium", "2", "3")) ASC
```

---

## Thread Overlap

_Where do mysteries converge? Shared documents between threads are where breakthroughs happen._

```dataviewjs
const threads = [
  { tag: "#mystery/dawnmere", name: "Dawnmere" },
  { tag: "#mystery/visage", name: "Visage" },
  { tag: "#mystery/architect", name: "Architect" },
  { tag: "#mystery/saeth", name: "Sae-th" },
  { tag: "#mystery/symbols", name: "Symbols" },
  { tag: "#mystery/brothers", name: "Brothers" },
  { tag: "#mystery/dreamrot", name: "Dreamrot" },
  { tag: "#mystery/ari", name: "Ari" },
  { tag: "#mystery/ruin", name: "Ruin" }
];

let pairs = [];
for (let i = 0; i < threads.length; i++) {
  for (let j = i + 1; j < threads.length; j++) {
    let shared = dv.pages(threads[i].tag + " AND " + threads[j].tag);
    if (shared.length > 0) {
      pairs.push([
        threads[i].name + " + " + threads[j].name,
        shared.length,
        shared.map(p => p.file.link).join(", ")
      ]);
    }
  }
}

pairs.sort((a, b) => b[1] - a[1]);

dv.table(
  ["Connection", "Shared Docs", "Documents"],
  pairs
);
```

---

## Most Connected Documents

_Keystone documents where multiple mysteries converge._

```dataviewjs
let pages = dv.pages('"Campaign Knowledge"')
  .where(p => p.file.tags && p.file.tags.some(t => String(t).startsWith("#mystery/")));

let rows = pages.map(p => {
  let mysteryTags = (p.file.tags || []).filter(t => String(t).startsWith("#mystery/"));
  return [p.file.link, p.type, mysteryTags.length, mysteryTags.map(t => String(t).replace("#mystery/", "")).join(", ")];
}).sort((a, b) => b[2] - a[2]);

dv.table(
  ["Document", "Type", "Thread Count", "Threads"],
  rows
);
```

---

## The Dawnmere Bloodline

```juggl
local: Sylara Dawnmere
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/dawnmere
SORT type ASC
```

> Cross-threads: [[Campaign Knowledge/Organizations/The Dawnmere Lineage]], [[Campaign Knowledge/Items/Sylara's Amulet]], and [[Campaign Knowledge/Clues/The Four Symbols]] connect this mystery to the Visage, the Symbols, and the Ruin.

---

## The Visage

```juggl
local: The Visage
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/visage
SORT type ASC
```

> The entity in the ceremonial room. Connected to the Dawnmere bloodline through [[Campaign Knowledge/Characters/Sylara Dawnmere|Sylara's]] voice. Open question: what is it?

---

## The Architect

```juggl
local: The Architect
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/architect
SORT type ASC
```

> The figure at [[Campaign Knowledge/Characters/Sylara Dawnmere|Sylara's]] bedside. Not yet connected to [[Campaign Knowledge/Characters/The Visage]] in Zeph's mind. That framework might exist.

---

## Sae-th

```juggl
local: Sae-th
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/saeth
SORT type ASC
```

> The language of [[Campaign Knowledge/Clues/The Brothers]]. It binds the world. Passages unread. Connection to the four symbols provisional.

---

## The Four Symbols

```juggl
local: The Four Symbols
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/symbols
SORT type ASC
```

> Four variations of a shared base form. The Dawnmere crest is one. Possibly one per Brother.

---

## The Brothers

```juggl
local: The Brothers
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/brothers
SORT type ASC
```

> Unnamed, unnumbered, unknown. Referenced once in [[Campaign Knowledge/Items/Aeralon's Journal|the journal]]. Possibly four.

---

## The Dreamrot

```juggl
local: Zephyrix Skydelver
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
filter: tag:#mystery/dreamrot
```

```dataview
TABLE type, status
FROM #mystery/dreamrot
SORT type ASC
```

> The infection. Both a curse and something else. Zeph is beginning to notice changes in himself.

---

## Ari's True Nature

```juggl
local: Ari
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/ari
SORT type ASC
```

> Actually [[Campaign Knowledge/Characters/Sylara Dawnmere|Sylara's]] familiar. Zeph does not know this.

---

## The Lost Civilization

```juggl
local: The Sealed Ruin Beneath Grainfall
layout: force-directed
height: 350px
autoZoom: true
navigator: false
toolbar: false
```

```dataview
TABLE type, status
FROM #mystery/ruin
SORT type ASC
```

> The civilization that built [[Campaign Knowledge/Locations/The Sealed Ruin Beneath Grainfall|the sealed ruin]]. No trace in any known record. Predates history entirely.

---

## Recently Modified

```dataview
TABLE file.mtime as "Last Modified"
FROM "Campaign Knowledge" OR "Campaign Notes/Story"
SORT file.mtime DESC
LIMIT 8
```

---

[[Home|Home]] · [[Campaign Notes/Questions/Index|Open Questions]] · [[Campaign Knowledge/Index|Master Index]]
