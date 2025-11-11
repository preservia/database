---
title: Information
nav_order: 3
---

# Information
Welcome! This page covers behind the scenes stuff about the PreserveDB itself. Tap a topic below to jump to it.

## `db.json`
While the PreserveDB has a whole site (the one you are on right now) that you can use to browse content, there is also a `db.json` file available for more advanced purposes. This file contains **all info about every piece of content in PreserveDB**, this is mostly for future plans.

## PreserveIDs
Since Preservia is home to lots of different content, an ID system was needed, this allows content to be easily tracked no matter what type it may be. Games, themes, mods, firmware, everything has a PreserveID. PreserveIDs are generated using the `MetadataString` of the content, the system used is deterministic meaning the same MetadataString will always output the same PreserveID. The script used to generate PreserveIDs is available here.

Full details on PreserveIDs are available on the Preservia Wiki.
