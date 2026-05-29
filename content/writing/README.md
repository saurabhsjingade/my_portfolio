# Writing — MDX posts

Drop new posts here as `.mdx` files. Recommended frontmatter:

```mdx
---
title: "Debugging RDMA latency at 100G"
description: "A short note on what went wrong and how I found it."
date: "2026-06-15"
tags: ["rdma", "performance", "debug"]
---

# Debugging RDMA latency at 100G

Body text goes here. Use code blocks with language tags for syntax highlighting:

\```bash
$ ibv_devices
\```
```

The writing index page (`app/writing/page.tsx`) and individual post route
(`app/writing/[slug]/page.tsx`, not yet built) will pick these up automatically
once you wire up an MDX loader — I recommend `next-mdx-remote` (already in
package.json) with `fs.readdirSync` over this directory at build time.

For v1, the writing route just points to your Medium archive. Add the MDX
loader when you actually start writing.
