---
title: Home
nav_order: 1
featured: 
	- P4206257
	- P4206257
	- P4206257
---

# PreserveDB

Welcome to **PreserveDB**, the official content database for  Preservia. Here you’ll find detailed information about all content archived by Preservia.

---

## Featured Content

<div id="featured-container" class="featured-wrapper">
  Loading…
</div>

---

## Recently Added
Coming soon.

---

## Browse Content By Type

- [Games](./content/games/index.md)
- [Ports](./content/ports/index.md)
- [Homebrew](./content/homebrew/index.md)
- [Mods](/)
- [Firmware](/)

---

## About

Preservia is a digital preservation project, mainly focused on preserving content associated with the Nintendo Switch, including games, updates, DLC, mods, homebrew, firmware, and a whole lot more. Currently, only homebrew software is available to the public. While the Nintendo Switch is the main focus of this project, some content for some other consoles will be available as well.

---

<script>
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("featured-container");

  const featuredIDs = [
    {% for f in page.featured %}
      "{{ f }}",
    {% endfor %}
  ].filter(x => x && x.trim().length > 0);

  try {
    const response = await fetch("/database/db.json"); 
    const db = await response.json();

    container.innerHTML = "";

    featuredIDs.forEach(id => {
      const entry = db[id];
      if (!entry) {
        container.innerHTML += `<div class="featured-card missing">Missing entry for ${id}</div>`;
        return;
      }

      const typePlural = entry.type + "s";
      const pageURL = `/database/content/${typePlural}/${id}.html`;

      const iconURL =
        `https://raw.githubusercontent.com/preservia/media/refs/heads/main/icons/${id}.png`;

		container.innerHTML += `
			<a href="${pageURL}" class="featured-card">
				<img src="${iconURL}" class="featured-icon" alt="${entry.name} icon">
				<div class="featured-info">
					<div class="featured-title">${entry.name}</div>
					<div class="featured-meta">
						<span class="featured-type">${entry.type.charAt(0).toUpperCase()}${entry.type.slice(1)}</span>
       	 				${
							entry.version
							? `<code class="featured-version">v${entry.version}</code>`
							: ""
						}
					</div>
				</div>
			</a>
		`;
    });

  } catch (err) {
    container.innerHTML = "Error loading featured content.";
    console.error(err);
  }
});
</script>