---
parent: Content
layout: game
title: Example Game
preserve_id: E0123456
platform: Switch
release: 2024
icon: /media/icons/missing.png
images: 1
---

[Download](https://preservia.github.io/ports){: .btn .btn-blue .mr-4 }
[View Source](https://preservia.github.io/ports){: .btn }

---

## Description
Ship of Harkinian is a port of The Legend of Zelda: Ocarina of Time to modern platforms. This version runs natively on the Nintendo Switch and it built with decompiled source code of the original game. It adds numerous improvements, such as widescreen support, higher frame rates, mod support, and features like randomizers, cheat menus, save-states, mod support, and so much more.

---

## Details

- Platform: Switch
- Released: 1-1-2025
- Preserve ID: `E0123456`
- Version: `1.0.0`
- MetadataString: `EXAMPLE`

---

## Gallery

{% if page.images %}
<div class="gallery">
  {% for i in (1..page.images) %}
  <img src="../media/images/{{ page.preserve_id }}/{{ i }}.jpg" alt="Image {{ i }}">
  {% endfor %}
</div>
{% endif %}
