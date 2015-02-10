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
  api.use(['templating','handlebars'], 'client');
  api.use(['standard-app-packages'], ['client','server']);
  api.addFiles(['client/views/chat.js',
                'client/views/chat.html'],'client')
  api.addFiles(['server/server.js',
              'server/publications.js'],'server');
  api.addFiles(['shared/collections.js',
                'lib/config.js'],['client','server'])
  api.use('accounts-base', 'server');
  api.export('AccountEasyChat')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kahon:account-easy-chat');
  api.addFiles('tests.js');
});
