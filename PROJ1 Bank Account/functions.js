var account = {
  balance: 0
};

//deposit
function Deposit (myAccount, myAmount){
  myAccount.balance += myAmount;
}
//withdraw
function Withdraw (myAccount, myAmount){
  myAccount.balance -= myAmount;
}
//get balance
function getBalance (myAccount){
  console.log(myAccount.balance);
}

Deposit (account, 1000);
getBalance(account);

Withdraw (account, 101);
getBalance(account);
