Badges are used to inform the user of the status of specific data.

## Usage

`BadgeDirective` – A custom directive designed to enhance badge elements by applying customizable styles and behaviors.
```ts
import { BadgeDirective } from '@daisyng/kit/directives/badge';
```

{{ NgDocActions.demo("SampleBadgeComponent") }}

## Sample

### Badge with brand colors

{{ NgDocActions.demo("SampleBadgeColorsComponent") }}

### Outline badge

To enable the `outline` style into your badge, simply add the `data-outline` attribute as shown below:

```html
<div dsyBadge data-outline>default</div>
```

{{ NgDocActions.demo("SampleBadgeOutlineComponent") }}

### Badge sizes

- Sizes: `xs`, `sm`, `md`, `lg`.

{{ NgDocActions.demo("SampleBadgeSizesComponent") }}

### Empty badge

{{ NgDocActions.demo("SampleBadgeEmptyComponent") }}

### Badge with state colors

{{ NgDocActions.demo("SampleBadgeWithStateColorComponent") }}

### Badge in a text

{{ NgDocActions.demo("SampleBadgeWithTextComponent") }}

### Badge in a button

{{ NgDocActions.demo("SampleBadgeInButtonComponent") }} 
