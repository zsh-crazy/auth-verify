# auth-verify
root-check的功能，主要不想依赖chalk，也可以使用es和cjs来引入，所以对齐进行利用

#安装
pnpm add -S auth-verify

npm i -S auth-verify

#使用
该库不仅是root检查回退，也将其相关方法一起导出，比如isRoot等

```
import {rootCheck} from 'auth-verify';

rootCheck()
```

或是使用cjs方式引入
```
const {rootCheck} = require('auth-verify');

rootCheck()
```

也可以自己去做判读处理
```
import {isRoot,isDocker,downgradeRoot,sudoBlock} from "auth-verify"

```



主要使用root-check的方法，也可以使用 root-check库 https://github.com/sindresorhus/root-check.git
