Package.describe({
  name: 'kahon:account-easy-chat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple Chat for meteor with account nickname support',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kahon/account-easy-chat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['standard-app-packages'], ['client','server']);
  api.use('accounts-base', 'server');
  api.addFiles(['client/client.html','client/client.js'],'client');
  api.addFiles(['lib/config.js',
                'shared/collections.js'],['server','client'])
  api.addFiles(['server/publications.js',
                'server/server.js'],['server'])
  api.use(['templating','handlebars'], 'client');
  api.imply(['templating'], 'client');
  api.export('AccountEasyChat')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kahon:account-easy-chat');
  api.addFiles('tests.js');
});
