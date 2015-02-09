Package.describe({
  name: 'kahon:account-easy-chat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['standard-app-packages'], ['client','server']);
  api.versionsFrom('1.0.3.1');
  api.addFiles('server/server.js');
  api.addFiles('server/collections.js');
  api.addFiles('server/publications.js');
  api.addFiles('lib/config.js');
  api.use('accounts-base', ['server']);
  api.export('AccountSimpleChat')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kahon:chat');
  api.addFiles('chat-tests.js');
});
