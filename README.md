# xolvio:private-packages

Allows you to add private packages to your app.

__Warning:__ Please use the npm package [mgp](https://www.npmjs.com/package/mgp) instead.
A limitation in the build lifecycle makes this package not that useful as intended, unfortunately.
The problem is that Meteor don't run the package code at all when your package depends on packages
that Meteor cannot find.

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
