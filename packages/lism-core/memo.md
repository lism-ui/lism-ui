## use client対策

```js
import React from 'react';
export const LayoutContext = React.createContext(null);
```

のように、 `React.foo`で利用することに注意。

```js
import { createContext } from 'react';
export const LayoutContext = createContext(null);
```

のように、useXXX や createContext などをとってきてしまうと、 Boxのインポートだけでも use client が必要だとエラーになる。

## パッケージ公開
