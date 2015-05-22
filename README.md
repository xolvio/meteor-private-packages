# xolvio:private-packages

Allows you to add private packages to your app.

## Getting Started

```bash
meteor add xolvio:private-packages
```

Add your private packages to the `git-packages.json` file in the root of your project.
Also [generate](https://github.com/settings/tokens/new) a token for private tarball access.

### Example

```javascript
{
  "my:private-package": {
    "tarball": "https://api.github.com/repos/my/private-packages/tarball/commithash",
    "path": "optional/directory/path"
  },
  "my:other-private-package": {
    "tarball": "https://api.github.com/repos/my/private-packages/tarball/commithash"
  },
  "token": "GITHUB_ACCESS_TOKEN"
}
```
