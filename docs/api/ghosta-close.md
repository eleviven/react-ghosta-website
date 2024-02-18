---
sidebar_position: 3
title: ghosta.close
sidebar_label: ghosta.close
---

# ghosta.close

To close alert by id or all alerts

## Options

| Property | Type   | Default | Description                                                                     |
| -------- | ------ | ------- | ------------------------------------------------------------------------------- |
| id       | number | -       | Close alert that has a given id. If you don't pass any id all alerts will close |

## Usage

```tsx
// If you don't pass any id, all alerts will close
ghosta.close();

// Close alert that has a given id
const id = ghosta.fire({ title: "Alert title" });
ghosta.close(id);
```
