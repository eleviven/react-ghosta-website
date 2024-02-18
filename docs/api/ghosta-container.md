---
sidebar_position: 1
title: Ghosta Container
sidebar_label: Ghosta Container
---

# Ghosta Container

## Props

| Property   | Type                                                             | Default | Description                                        |
| ---------- | ---------------------------------------------------------------- | ------- | -------------------------------------------------- |
| colors     | [GhostaPopupElementColors](/docs/types#ghostapopupelementcolors) | -       | Customize colors elements of alert                 |
| classNames | [GhostaPopupClassNames](/docs/types#ghostapopupclassnames)       | -       | Add custom classes and customize elements of alert |

## Usage

```tsx
<GhostaContainer
  classNames={{ panel: "bg-red-500" }}
  colors={{ title: "green" }}
/>
```
