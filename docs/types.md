---
sidebar_position: 1
title: Type Referance
sidebar_label: Type Referance
---

## GhostaPopupContext

| Options | Type       | Description           |
| ------- | ---------- | --------------------- |
| popupId | number     | ID of popup           |
| onClose | () => void | Close method of popup |

## GhostaButtonOptions

| Options      | Type                                                        | Description                        |
| ------------ | ----------------------------------------------------------- | ---------------------------------- |
| title        | string                                                      | Title of the button                |
| preventClose | boolean                                                     | Prevent close when click on button |
| variant      | `default \| primary \| success \| danger`                   | Color \| variant of the button     |
| size         | `sm \| md \| lg`                                            | Size of the button                 |
| isFilled     | boolean                                                     | if true, button will be filled     |
| onClick      | (params: [GhostaPopupContext](#ghostapopupcontext)) => void | onClick event of button            |

## GhostaPopupElementColors

| Options         | Type   | Description                   |
| --------------- | ------ | ----------------------------- |
| textIcon        | string | Icon color                    |
| bgIcon          | string | Icon background color         |
| textTitle       | string | Title color                   |
| textDescription | string | Description color             |
| bgPanel         | string | Panel background color        |
| bgBackdrop      | string | Backdrop background color     |
| textCloseButton | string | Close button color            |
| bgCloseButton   | string | Close button background color |

## GhostaPopupClassNames

<table>
    <thead>
        <tr>
            <th>Options</th>
            <th>Type</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>panel</td>
            <td>string</td>
        </tr>
        <tr>
            <td>panelHeader</td>
            <td>string</td>
        </tr>
        <tr>
            <td>panelBody</td>
            <td>string</td>
        </tr>
        <tr>
            <td>panelFooter</td>
            <td>string</td>
        </tr>
        <tr>
            <td>backdrop</td>
            <td>string</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>string</td>
        </tr>
        <tr>
            <td>description</td>
            <td>string</td>
        </tr>
        <tr>
            <td>button</td>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>base</td>
                            <td>string</td>
                        </tr>
                        <tr>
                            <td>variants</td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>default</td>
                                            <td>string</td>
                                        </tr>
                                        <tr>
                                            <td>primary</td>
                                            <td>string</td>
                                        </tr>
                                        <tr>
                                            <td>success</td>
                                            <td>string</td>
                                        </tr>
                                        <tr>
                                            <td>danger</td>
                                            <td>string</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>sizes</td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>sm</td>
                                            <td>string</td>
                                        </tr>
                                        <tr>
                                            <td>md</td>
                                            <td>string</td>
                                        </tr>
                                        <tr>
                                            <td>lg</td>
                                            <td>string</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>

</table>
