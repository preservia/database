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
This is an example description for an example game. This example content listing has lots of details like platform, release date, content type, and a whole lot more. 

---

## Details

- Platform: Switch
- Type: Port
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
