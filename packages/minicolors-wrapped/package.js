Package.describe({
  name: 'nwdev:minicolors-wrapped',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'angular directive wrapper by Kai Henzler',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['ecmascript', 'claviska:jquery-minicolors@2.1.7', 'angular:angular@1.4.7']);
  api.addFiles('angular-minicolors/angular-minicolors.js');
  api.export('angular', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nwdev:minicolors-wrapped');
  api.addFiles('angular-minicolors/angular-minicolors.js');
});
