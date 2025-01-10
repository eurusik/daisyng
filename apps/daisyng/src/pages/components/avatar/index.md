Avatars are used to show a thumbnail representation of an individual or business in the interface.

## Usage

`AvatarComponent` – a custom component that applies predefined styles and behavior to display an avatar image.

```ts
import { AvatarComponent } from '@daisyng/kit/components/avatar';
```

{{ NgDocActions.demo("SampleAvatarComponent") }}

## Sample

### Avatar in custom sizes

```html
<dsy-avatar size="medium">
  <img src="/avatar.png" alt="avatar" />
</dsy-avatar>
```

- Sizes: `xs`, `sm`, `md`, `lg`.

{{ NgDocActions.demo("SampleAvatarSizeComponent") }}

### Avatar rounded

```html
<dsy-avatar rounded="xs">
  <img src="/avatar.png" alt="avatar" />
</dsy-avatar>
```

- Rounded: `xs`, `full`. 

{{ NgDocActions.demo("SampleAvatarRoundedComponent") }}

### Avatar with ring

```html
<dsy-avatar ring="primary">
  <img src="/avatar.png" alt="avatar" />
</dsy-avatar>
```

- Ring variants: `primary`, `secondary`, `neutral`, `accent`, `info`, `success`, `warning`, `error`. 

{{ NgDocActions.demo("SampleAvatarWithRingComponent") }}

### Avatar group

```html
<dsy-avatar-group>
  <dsy-avatar>
    <img src="/avatar.png" alt="avatar" />
  </dsy-avatar>
  ...
</dsy-avatar-group>
```

{{ NgDocActions.demo("SampleAvatarGroupComponent") }}

### Avatar group with counter

```html
<dsy-avatar-group>
  <dsy-avatar>
    <img src="/avatar.png" alt="avatar" />
  </dsy-avatar>
  ...
  <dsy-avatar [placeholder]="true">
    <span class="text-xs">+99</span>
  </dsy-avatar>
</dsy-avatar-group>
```

{{ NgDocActions.demo("SampleAvatarGroupWithCounterComponent") }}

### Avatar with presence indicator

```html
<dsy-avatar indicator="online">
  <img src="/avatar.png" alt="avatar" />
</dsy-avatar>
```

- States: `online`, `offline`. 

{{ NgDocActions.demo("SampleAvatarIndicatorComponent") }}

### Avatar placeholder

```html
<dsy-avatar [placeholder]="true">
  <span class="text-3xl">D</span>
</dsy-avatar>
```

- Shapes: `square`, `circle`. 
- Types: `primary`, `secondary`, `neutral`, `accent`, `info`, `success`, `warning`, `error`.

{{ NgDocActions.demo("SampleAvatarPlaceholderComponent") }}
