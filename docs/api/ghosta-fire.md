---
sidebar_position: 2
title: ghosta.fire
sidebar_label: ghosta.fire
---

# ghosta.fire

## Options

| Property          | Type                                                             | Default | Description                                                                      |
| ----------------- | ---------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| title             | string                                                           | -       | Title under the icon                                                             |
| description       | string                                                           | -       | Description under the icon                                                       |
| icon              | ReactNode                                                        | -       | Render icon or any react element on popup inside circle box                      |
| headerTitle       | string                                                           | -       | Title above the icon                                                             |
| headerDescription | string                                                           | -       | Description above the icon                                                       |
| content           | ReactNode                                                        | -       | Content under the icon                                                           |
| buttons           | [GhostaButtonOptions](/docs/types#ghostabuttonoptions)[]         | -       | Show buttons on the popup                                                        |
| alignment         | `left \| center \| right`                                        | center  | Alignment of content of popup                                                    |
| showCloseButton   | boolean                                                          | false   | Show close button on top right of popup                                          |
| preventClose      | boolean                                                          | false   | If true, popup won't close. You can close it just by using `ghosta.close` method |
| size              | `sm \| md \| lg`                                                 | md      | Size of the popup                                                                |
| colors            | [GhostaPopupElementColors](/docs/types#ghostapopupelementcolors) | -       | All element colors of Popup can change by colors option                          |
| classNames        | [GhostaPopupClassNames](/docs/types#ghostapopupclassnames)       | -       | All element classNames of Popup can change by classNames option                  |

## Usage

```tsx
const id = ghosta.fire({ title: "Alert title" });
```
