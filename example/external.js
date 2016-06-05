var bank = require('../');

var login = {
  username: '<username>',
  password: '<password>'
};

var account = bank.account(login);

account.login(function() {
  account.external(function(err, data){
    if (err) return console.log(err);

    console.log('external', data);
  });
});
