---
title: PreserveDB
nav_order: 1
og_image: /assets/site-preview.png
featured: 
  - P4206257
  - F4719209
  - P8997097
  - P1946048
---

# PreserveDB

Welcome to **PreserveDB**, the official content database for  Preservia! Here you can browse the all the different content Preservia has to offer and view detailed info about the things you are curious about. You can easily navigate to exactly where you want to go by using the sidebar and search features. To see more information regarding PreserveDB, check out the [*Information*](./information.md) page.

---

## Featured Content

<div id="featured-content-display" class="content-row">
  Loading…
</div>

---

## Recently Added

<div id="recently-added-display" class="content-row">
  Loading...
</div>

---

## Browse Content By Type

- [Games](./content/games/index.md) (Coming soon.)
- [Ports](./content/ports/index.md)
- [Fonts](./content/fonts/index.md)
- [Homebrew](./content/homebrew/index.md) (Coming soon.)
- [Mods](/) (Coming soon.)
- [Firmware](/) (Coming soon.)

---

## About

Preservia is a digital preservation project, mainly focused on preserving content associated with the Nintendo Switch, including games, updates, DLC, mods, homebrew, firmware, and a whole lot more. Currently, only homebrew software is available to the public. While the Nintendo Switch is the main focus of this project, some content for other consoles will be available as well.

---

<script>
document.addEventListener("DOMContentLoaded", () => {
  renderContentList({
    elementId: "featured-content-display",
    featuredIDs: [
      {% for id in page.featured %}
        "{{ id }}",
      {% endfor %}
    ]
  });
});
</script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  renderContentList({
    elementId: "recently-added-display",
    count: 5,
    filterType: "all"
  });
});
</script>