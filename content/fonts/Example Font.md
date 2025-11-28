---
parent: Fonts
layout: font
title: Example Font
preserve_id: Example
author: Example
string: EXAMPLE:FONT:3DS:0.0.0
images: 0
---

[Download](DOWNLOAD LINK){: .btn .btn-green .mr-2 }
[View on GitHub](EXAMPLE LINK){: .btn }

{: .warning }
Custom 3DS fonts replace the built-in system font, meaning you will see this font in all system apps, some homebrew apps, and some games. This can cause issues in certain games. Before using custom fonts, please read the info on [this page](./index.md).


---

## Description
Example Description.

---

## Gallery

{% if page.images %}
<div class="gallery">
  {% for i in (1..page.images) %}
  <img src="https://github.com/preservia/media/blob/main/images/{{ page.preserve_id }}/{{ i }}.jpg?raw=true" alt="Image {{ i }}">
  {% endfor %}
</div>
{% endif %}

Image credit text
{: .fs-2 }

---

## Details

- Creator: {{ page.author }}
- Preserve ID: `{{ page.preserve_id }}`
- MetadataString: `{{ page.string }}`