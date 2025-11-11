---
parent: games
layout: game
title: Example Game
preserve_id: E0123456
platform: Switch
release: 2025
icon: /media/icons/missing.png
images: 0
---

[Download](https://preservia.github.io/ports){: .btn .btn-blue .mr-3 }
[View on Nintendo eShop](https://www.nintendo.com/us/store/games/){: .btn .mr-3 }
[View on Wikipedia](https://en.wikipedia.org/wiki/){: .btn }

---

## Description
This is an example game to showcase how games will look on this website!

---

## Gallery

{% if page.images %}
<div class="gallery">
  {% for i in (1..page.images) %}
  <img src="../../media/images/{{ page.preserve_id }}/{{ i }}.jpg" alt="Image {{ i }}">
  {% endfor %}
</div>
{% endif %}


---

## Details

- Platform: Switch
- Released: 3-30-2024
- Preserve ID: `P4206257`
- Version: `8.0.6`
- MetadataString: `SOH:PORT:SWITCH:8.0.6`

### Files:
`Example Game [E0123456](GAME).file`
`Example Game [E0123456](UPDATE)(1.3.2).file`
`DLC for Example Game [E0654321].file`
