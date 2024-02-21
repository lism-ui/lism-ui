## Installation

For details, see [Docs](https://www.lism.style/)

### 1. Installation

```bash
npm i @loos/lism-core
```

or

```bash
pnpm add @loos/lism-core
```

### 2. Loading CSS

Please import CSS as a global style.

```js
import '@loos/lism-core/css/all.css';
```

(For example, if it is Next.js, load it with `_app.js` or `layout.js`.)

For HTML sites, you can also load CSS via CDN.

```html
<link href="https://cdn.jsdelivr.net/npm/@loos/lism-core/dist/css/all.css" rel="stylesheet" />
```

### 3. Using Components

```jsx
import { Box, Text, ... } from '@loos/lism-core';

// ...
<Box p={20} bgc="base-2">
	<Text fz="l">Lorem ipsum text...</Text>
</Box>
// ...
```

---

## include package

© Phosphor Icons
Website: https://phosphoricons.com/
Source: https://github.com/phosphor-icons
License: MIT License, https://opensource.org/licenses/MIT
