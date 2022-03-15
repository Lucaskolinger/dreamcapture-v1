## Tech-stack

- Nuxt.js
- Nuxt Content
- Cloudinary
- Nuxt Image
- Netlify
- Domain Registration on Siteground
- Mail Server on Siteground

## Component Documentation

### CardList

Renders project-cards to a grid-view based on markdown-files collected in content/projects.
Each card links to a detail view about the project, the filename representing the url-slug.

### Card

A single project-card instance rendering the project-name, thumbnail-image, short summary, category, length, release date.

### Navigation

# Project-Detail View Component Documentation

| Component               | Description                                                                                                                                                                                                                                                                           | Props                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `<video-header>`        | Renders a video-player with duration, category and release-date attributes                                                                                                                                                                                                            | `videosrc` `thumbnail` `length` `date` `category` |
| `<video-header-yt>`        | Renders the same video header as ```<video-header>``` just for youtube-links.                                                                                                                                                                                                            | `length` `date` `category` `link` |
| `<text-poster-section>` | Renders the project description alongside with the poster                                                                                                                                                                                                                             | `description` `poster`                            |
| `<team-section>`        | Hosts a collection of `team-card`components                                                                                                                                                                                                                                           |                                                   |
| `<team-card>`           | Renders a single team-list element; Has to live inside a `team-section` and to be wrapped within `<template>` tags. Each part of the `name` attribute seperated by a `,` is rendered as a single team-member tag. The icon is derived from `role` and the associated link from `name` | `role` `name`                                     |


### Example:

```
<team-section>
  <template>
    <team-card role="Produktion" name="Finn-Oliver Walter (Schnitt | Ton-Mischung), Kilian Herde (Farben), Hans Wurst, Keine Ahnung, Untitles, Was Weiß Ich"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Sonja Marschall Finn Walter"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Finn-Oliver Walter, Lucas Kolinger"><team-card>
  </template>
  <template>
    <team-card role="Produktion" name="Finn-Oliver Walter (Schnitt | Ton-Mischung), Kilian Herde (Farben)"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Sonja Marschall, Finn Walter"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Finn-Oliver Walter, Lucas Kolinger"><team-card>
  </template>
  <template>
    <team-card role="Produktion" name="Finn-Oliver Walter (Schnitt | Ton-Mischung), Kilian Herde (Farben)"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Sonja Marschall, Finn Walter"><team-card>
  </template>
  <template>
    <team-card role="Kamera" name="Finn-Oliver Walter, Lucas Kolinger"><team-card>
  </template>
</team-section>
```
