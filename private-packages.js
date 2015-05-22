var path = Npm.require('path');
var fs = Npm.require('fs');

var configPath = path.join(MeteorFilesHelpers.getAppPath(), 'git-packages.json');
if (!fs.existsSync(configPath)) {
  fs.writeFile(configPath, '{\n\n}\n');
}

var mgpProcesses = {
  git: null,
  local: null
};

var watcher = chokidar.watch('{git,local}-packages.json', {
  persistent: true,
  cwd: MeteorFilesHelpers.getAppPath()
});

var runMeteorGitPackagesCallback = Meteor.bindEnvironment(runMeteorGitPackages);
watcher
  .on('add', runMeteorGitPackagesCallback)
  .on('change', runMeteorGitPackagesCallback)
  .on('unlink', runMeteorGitPackagesCallback);

function runMeteorGitPackages(configPath) {
  var type = 'git';
  if (configPath.indexOf('local-packages.json') !== -1) {
    type = 'local';
  }

  var mgpProcess = mgpProcesses[type];
  if (mgpProcess) {
    mgpProcess.kill();
  } else {
    mgpProcess = new sanjo.LongRunningChildProcess('mgp');
    mgpProcesses[type] = mgpProcess;
  }

  var args = [
    path.join(MeteorFilesHelpers.getNodeModulePath('xolvio:git-packages', 'mgp'), 'prepare.js')
  ];
  if (type === 'local') {
    args.push('link');
  }

  mgpProcess.spawn({
    command: process.execPath,
    args: args
  });
}
