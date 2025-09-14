# Javascript Project - VS Code Profiles – Extensions & Settings

This document lists the recommended **extensions**, **settings.json configurations**, and a **shared .editorconfig** file for different project types JavaScript/TypeScript.

Use **VS Code Profiles** to keep them separate and switch between them easily.

---

## 🔹 JavaScript / TypeScript Profile


### 📦 Extensions

- Prettier - Code formatter (`esbenp.prettier-vscode`)
- ESLint (`dbaeumer.vscode-eslint`)
- JavaScript and TypeScript Nightly (`ms-vscode.vscode-typescript-next`) _(optional)_
- Path Intellisense (`christian-kohler.path-intellisense`)
- Material Icon Theme (`PKief.material-icon-theme`)
- Better Comments (`aaron-bond.better-comments`)
- GitLens (`eamodio.gitlens`)
- Auto Import (`steoates.autoimport`)

### 💻 Install Command

```cmd
code --install-extension esbenp.prettier-vscode --force
code --install-extension dbaeumer.vscode-eslint --force
code --install-extension ms-vscode.vscode-typescript-next --force
code --install-extension christian-kohler.path-intellisense --force
code --install-extension PKief.material-icon-theme --force
code --install-extension aaron-bond.better-comments --force
code --install-extension eamodio.gitlens --force
code --install-extension steoates.autoimport --force
```

### Settings JSON

```json
{
  "files.eol": "\r\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,

  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.rulers": [80, 120],
  "editor.guides.bracketPairs": "active",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,

  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[jsonc]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },

  "javascript.updateImportsOnFileMove.enabled": "always",
  "eslint.enable": true,
  "eslint.run": "onSave",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },

  "prettier.semi": true,
  "prettier.trailingComma": "es5",
  "prettier.singleQuote": false,
  "prettier.endOfLine": "crlf"
}
```

