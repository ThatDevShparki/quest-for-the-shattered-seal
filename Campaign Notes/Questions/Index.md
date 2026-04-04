---
type: index
aliases: []
tags: []
---

# Open Questions

_Everything [[Zephyrix Skydelver]] Does Not Know Yet_

---

> This index auto-populates from individual question files. Each subject has its own file with prioritized questions, related clues, and a knowledge tracker. As questions are answered, update the `status` field in the relevant file's frontmatter.

---

## High Priority

```dataview
TABLE subject, status
FROM "Campaign Notes/Questions"
WHERE type = "question" AND priority = "high"
SORT subject ASC
```

---

## Medium Priority

```dataview
TABLE subject, status
FROM "Campaign Notes/Questions"
WHERE type = "question" AND priority = "medium"
SORT subject ASC
```

---

## All Questions

```dataview
TABLE priority, status, subject
FROM "Campaign Notes/Questions"
WHERE type = "question"
SORT choice(priority = "high", "1", choice(priority = "medium", "2", "3")) ASC
```

---

## The Core Question

> What would he do if he discovered something that could change the world at a cost to himself?

He does not know yet. He went into that room and something asked him a version of this question and he ran without answering. He is going back. And this time he is going to decide.

Whatever it costs him, he will have chosen it.

That is all he knows for certain going into session one.

---

_Last updated: Session 0 — Pre Campaign_
