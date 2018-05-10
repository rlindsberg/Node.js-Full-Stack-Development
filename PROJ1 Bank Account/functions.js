var accounts = [];

function createAccount(newAccount){
  //push to the account-array
  accounts.push(newAccount);
  console.log('Account created.');
  console.log(getAccount(newAccount.username));
  //return account
  return newAccount;
}
function getAccount(myUsername){
  var matchedAccount;
  accounts.forEach(function (account){
    if (account.username === myUsername) {
      matchedAccount = account;
    }
  });
  console.log('Account get: ');
  return matchedAccount;
}
//deposit
function Deposit (myUsername, myAmount){
  accounts.forEach(function (account){
    if (account.username === myUsername) {
      account.balance += myAmount;
      console.log('We got your money.');
    }
  });
  console.log(getAccount(myUsername));
}
//withdraw
function Withdraw (myUsername, myAmount){
  myAccount.balance -= myAmount;
}
//get balance
function getBalance (myUsername){
  console.log(myAccount.balance);
}

var rodericksAccount = createAccount({
  username: 'rlindsberg',
  balance: 1000000
});

Deposit('rlindsberg', 100);
