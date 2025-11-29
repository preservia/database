---
title: Fonts
parent: Content
nav_order: 3
images: 3
---

# Fonts
A growing collection of fonts ported to the Nintendo 3DS. 

{: .warning }
Never uninstall CFW while a custom font is installed. **This will fully brick your console!** If this happens you'll need a [DS flashcart with ntrboot](https://www.flashcarts.net/ds-quick-start-guide) to re-install boot9strap.

{: .notice }
It is recommended you create a NAND backup before installing custom fonts as you will be modifying system files. Doing so is safe since boot9strap provides brick protection but it is still recommended that you make a backup. If your home menu fails to launch after installing a custom font, view [*Removing a Custom Font*](#removing-a-custom-font).

## How to Install a Font
1. Put a downloaded `.cia` file on your (micro)SD Card.
2. Turn your 3DS on while holding the `Start` button to open GodMode9.
3. Navigate to your SD Card, then to where your put your `.cia` and select it.
4. Select `CIA image options...` then `Install game image`.
5. Press `A` until you are back on the main menu, then press `Start`.

Your system should reboot with your custom font installed.

#### Removing a Custom Font
To remove a custom font, download the original [System Font]() and reinstall it using the same installation method as above. 

---

## Recently Added Fonts

<div id="recently-added-fonts" class="content-row">
  Loading...
</div>

---

## Gallery

{% if page.images %}
<div class="gallery">
  {% for i in (1..page.images) %}
  <img src="/database/assets/galleries/fonts/{{ i }}.png" alt="Image {{ i }}">
  {% endfor %}
</div>
{% endif %}

#### Themes used (in-order):

[Undertale Waterfall](https://themeplaza.art/item/102183) • [Minecraft Panorama](https://themeplaza.art/item/52215) • [The Final Fall](https://themeplaza.art/item/85988)
{: .fs-2 }
---

## Custom Font Compatibility

{: .notice }
Please be aware that custom fonts **overwrite the system font**. Games that use the system font will instead display your installed custom font, this *may* cause issues in certain games.

Here is a list of some apps and games that use the system font for text in-game:
- Streetpass Mii Plaza
- Settings
- Tomodachi Life
- Miitopia
- Pilot Wings
- Super Mario Maker
- Chibi-Robo Photo Finder
- Kid Icarus Uprising
- Dillon's Dead-Heat Breakers

Not every game is listed here, you may encounter your own issues, if you do please let us know by creating an issue on the GitHub repository.

---

### Additional Info and Thanks

{: .notice }
Create your *own* fonts for your 3DS by following [AromaKitsunes Guide](https://aromakitsune.github.io/3DS-System-Font-Customization)!

This guide was used to create all the fonts available on this site, AromaKitsune was also nice enough to allow their created fonts to be uploaded onto this site, so big shoutout to them! For more info and support about creating your own fonts for 3DS, or other 3DS customization, join the ["Custom 3DS Assets" Discord Server](https://discord.gg/0z7IGZ5Sv3D0mEN0).



<script>
document.addEventListener("DOMContentLoaded", () => {
  renderContentList({
    elementId: "recently-added-fonts",
    count: 5,
    filterType: "font"
  });
});
</script>