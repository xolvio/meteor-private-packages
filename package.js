Package.describe({
  name: 'xolvio:private-packages',
  version: '1.0.0',
  summary: 'Allows you to add private packages to your app.',
  git: 'https://github.com/xolvio/meteor-private-packages.git',
  documentation: 'README.md'
});

Npm.depends({
  'mgp': '0.0.7'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('velocity:chokidar@1.0.1');
  api.use('sanjo:meteor-files-helpers@1.1.0_4');
  api.use('sanjo:long-running-child-process@1.1.1');
  api.addFiles('private-packages.js');
});
