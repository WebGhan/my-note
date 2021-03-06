### commit message格式
```
<type>(<scope>): <subject>
```


### type(必须)

用于说明 git commit 的类别，只允许使用下面的标识。

feat：新功能（feature）

fix/to：修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG。

- fix：产生 diff 并自动修复此问题，适合于一次提交直接修复问题。
- to：只产生 diff 不自动修复此问题，适合于多次提交，最终修复问题提交时使用fix。

docs：文档（documentation）。

style：格式（不影响代码运行的变动）。

refactor：重构（即不是新增功能，也不是修改bug的代码变动）。

perf：优化相关，比如提升性能、体验。

test：增加测试。

chore：构建过程或辅助工具的变动。

revert：回滚到上一个版本。

merge：代码合并。

sync：同步主线或分支的Bug。


### scope(可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。


### subject(必须)

subject 是 commit 目的的简短描述，不超过 50 个字符。

- 建议使用中文。
- 结尾不加句号或其他标点符号。

根据以上规范 git commit message 将是如下的格式：
```
fix: 用户查询缺少username属性
feat: 用户查询接口开发
```


### 关联 issue

在 coding 中还可以通过 `# + id` 的方式关联项目协同中的任务

示例：
```
fix(user): #3260 用户查询缺少username属性
feat: #3120 用户查询接口开发
```