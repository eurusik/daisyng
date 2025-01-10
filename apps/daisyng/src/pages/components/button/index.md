Buttons allow the user to take actions or make choices.

## Usage

`ButtonDirective` – a custom directive that enhances the standard button element by applying custom styles and behavior.

```ts
import { ButtonDirective } from '@daisyng/kit/directives/button';
```

{{ NgDocActions.demo("SampleButtonComponent") }}

## Sample

### Buttons with brand colors

{{ NgDocActions.demo("SampleBrandColorsComponent") }}

### Buttons with state colors

{{ NgDocActions.demo("SampleStateColorComponent") }}

### Outline buttons

To enable the `outline` style into your badge, simply add the `data-outline` attribute as shown below:

```html
<button dsyBtn data-outline>Button</button>
```

{{ NgDocActions.demo("SampleOutlineComponent") }}

### Button sizes

```html
<button dsyBtn size="lg">Large</button>
```

- Sizes: `xs`, `sm`, `md`, `lg`.

{{ NgDocActions.demo("SampleSizeComponent") }}

### Responsive button

To make your button `responsive`, simply add the `data-responsive` attribute as shown below:

```html
<button dsyBtn data-responsive>Responsive</button>
```

{{ NgDocActions.demo("SampleResponsiveComponent") }}

### Wide button

{{ NgDocActions.demo("SampleWideButtonComponent") }}

### Disabled button

{{ NgDocActions.demo("SampleDisabledButtonComponent") }}

### Shape

{{ NgDocActions.demo("SampleShapeComponent") }}

### Loading button

To dynamically indicate that your button is in a `loading` state, bind the loading property to a value in your component as shown below:

```html
<button dsyBtn [loading]="isLoading">Button</button>
``` 

{{ NgDocActions.demo("SampleLoadingComponent") }}

### Button without click animation

To disable `animations` on your button, simply add the `data-skip-animation` attribute as shown below:

```html
<button dsyBtn data-skip-animation>Button</button>
```

{{ NgDocActions.demo("SampleNoAnimationComponent") }}
