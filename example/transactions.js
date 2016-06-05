var bank = require('../');

var login = {
  username: '<username>',
  password: '<password>'
};

var account = bank.account(login);

account.login(function() {
  account.transactions(function(err, trans){
    if (err) return console.log(err);

    console.log('transactions', trans);
  });
});
