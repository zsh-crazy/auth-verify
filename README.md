# teal-node-utils
初衷是写脚手架会引入好几个库，但这些库功能单一，不复杂，所以这个库主要集中一些常用的脚手架函数，比如root-check，user-home，path-exists等，会逐渐的完善，方便写脚手架，使得引入支持ES和CJS

# 安装
pnpm add -S teal-node-utils

npm i -S teal-node-utils

# 使用
该库不仅是root检查回退，也将其相关方法一起导出，比如isRoot等

```
import {rootCheck,userHome,isRoot,pathExistsSync} from 'teal-node-utils';


```

或是使用cjs方式引入
```
const {rootCheck,userHome,isRoot,pathExistsSync} = require('teal-node-utils');

```






