//v3.0
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
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === myUsername) {
      matchedAccount = accounts[i];
    }
  }
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
  //return error if myAmount isn't a nr
  if (typeof(myAmount) != 'number') {
    console.log("Please enter a number!");
    return;
  }

  accounts.forEach(function (account){
    if (account.username === myUsername) {
      account.balance -= myAmount;
      console.log('Please take care of your money.');
    }
  });
  console.log(getAccount(myUsername));
}
//get balance
function getBalance (myUsername){
  var matchedAccount;
  accounts.forEach(function (account){
    if (account.username === myUsername) {
      matchedAccount = account;
      console.log('We got a match.');
    }
  });
  console.log(matchedAccount.balance);
  return matchedAccount.balance;
}

function createBalanceGetter(myAccount){
  return function anonymousFunction(){
    return myAccount.balance;
  }
}
//Main
//Create account
var rodericksAccount = createAccount({
  username: 'rlindsberg',
  balance: 1000000
});

//Create function to get balance
var aDuplicateAccount = getAccount('rlindsberg');
var balanceGetter = createBalanceGetter(aDuplicateAccount);

//Deposit some cash
Deposit('rlindsberg', 100);
console.log('Testing closure...');
console.log(balanceGetter());
//Withdraw some cash
Withdraw('rlindsberg', 'hahaha');
console.log('Testing closure...');
console.log(balanceGetter());

Withdraw('rlindsberg', 900);
console.log('Testing closure...');
console.log(balanceGetter());
//What is my balance?
getBalance('rlindsberg');

//Create another account
var JohnsAccount = createAccount({
  username: 'jlindeberg',
  balance: 1000
});

console.log(accounts);
