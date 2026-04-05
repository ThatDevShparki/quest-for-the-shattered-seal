import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ScopeFlair: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  // Build slug → scope map at build time from all published files with scope
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

    function findScope(href) {
      // Resolve relative href to absolute URL, then extract pathname
      var resolved;
      try {
        resolved = new URL(href, window.location.href).pathname;
      } catch (e) {
        return null;
      }

      // Clean up the resolved path
      resolved = resolved
        .replace(/^\\//, "")
        .replace(/\\/$/, "")
        .replace(/#.*$/, "")
        .replace(/\\.html$/, "");

      // The resolved path may include a base URL prefix (e.g. "quest-for-the-shattered-seal/...")
      // but scope map keys don't have it. Try matching by progressively stripping
      // leading path segments until we find a match.
      var segments = resolved.split("/");
      for (var i = 0; i <= segments.length; i++) {
        var candidate = segments.slice(i).join("/");
        if (!candidate) continue;
        var scope = scopeMap[candidate] || scopeMap[decodeURIComponent(candidate)];
        if (scope) return scope;
      }

      return null;
    }

    document.querySelectorAll("a.internal").forEach(function(link) {
      // Clear previous scope classes (SPA re-navigation)
      link.classList.remove("scope-campaign", "scope-both", "scope-character");

      var href = link.getAttribute("href");
      if (!href) return;

      var scope = findScope(href);
      if (scope && scope !== "character") {
        link.classList.add("scope-" + scope);
      }
    });
  }

  document.addEventListener("nav", function() { enrichScopeLinks(); });
`

export default (() => ScopeFlair) satisfies QuartzComponentConstructor
