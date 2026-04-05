import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ScopeFlair: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  // Build slug → scope map at build time from all files with a scope property
  const scopeMap: Record<string, string> = {}
  for (const file of allFiles) {
    const scope = file.frontmatter?.scope
    if (scope && typeof scope === "string" && file.slug) {
      scopeMap[file.slug] = scope
    }
  }

  return (
    <div
      id="scope-flair-data"
      data-scope-map={JSON.stringify(scopeMap)}
      style="display:none"
    />
  )
}

ScopeFlair.afterDOMLoaded = `
  function enrichScopeLinks() {
    var dataEl = document.getElementById("scope-flair-data");
    if (!dataEl) return;

    var scopeMap;
    try {
      scopeMap = JSON.parse(dataEl.dataset.scopeMap || "{}");
    } catch (e) {
      return;
    }

    document.querySelectorAll("a.internal").forEach(function(link) {
      // Clear previous scope classes (SPA re-navigation)
      link.classList.remove("scope-campaign", "scope-both", "scope-character");

      var href = link.getAttribute("href");
      if (!href) return;

      // Normalize href to match slug format
      var slug = href
        .replace(/^\\.\\//,  "")   // strip leading ./
        .replace(/^\\//,     "")   // strip leading /
        .replace(/\\/$/,     "")   // strip trailing /
        .replace(/#.*$/,     "")   // strip anchor fragment
        .replace(/\\.html$/, "");  // strip .html extension

      // Try direct match, then decoded, then with spaces/hyphens swapped
      var scope = scopeMap[slug]
        || scopeMap[decodeURIComponent(slug)]
        || scopeMap[slug.replace(/-/g, " ")]
        || scopeMap[slug.replace(/ /g, "-")];

      if (scope && scope !== "character") {
        link.classList.add("scope-" + scope);
      }
    });
  }

  document.addEventListener("nav", function() { enrichScopeLinks(); });
`

export default (() => ScopeFlair) satisfies QuartzComponentConstructor
