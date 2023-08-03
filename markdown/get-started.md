# 快速使用

请先[安装](#/doc/install)本组件库。

### 完整引入

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import XpUi from "xp-ui";
import "xp-ui/dist/lib/xp-ui.css";

const app = createApp(App);

app.use(XpUi);
app.mount("#app");
```

### 引入某个组件

```javascript
import { XpButton } from "xp-ui";
import "xp-ui/dist/lib/xp-ui.css";
```

完成引入就可以使用我提供的组件啦。

#### Vue 单文件组件

代码示例：

```html
<template>
  <xp-button>按钮</xp-button>
</template>
```

下一节：[Avatar 头像](#/doc/avatar)
