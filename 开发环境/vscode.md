# vscode

## 插件

- Chinese (Simplified) Language Pack for Visual Studio Code
- Open in browser
- Live Server
- Git History
- Path Intellisense
- Vetur
- Copy Relative Path
- Easy LESS
- Easy Sass

## 设置

```JSON
{
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html"
    },
    "editor.fontSize": 18,
    "files.associations": {
        "*.wpy": "vue",
        "*.wxss": "css",
        "*.vue": "vue"
    },
    "editor.tabSize": 2,
    "easysass.targetDir": "css/",
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "beautify.options": {
        "brace_style": "end-expand"
    },
    "workbench.startupEditor": "welcomePage"
}
```