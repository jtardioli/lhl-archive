

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let trx of this.transactions) {
      balance += trx.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}


class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
  commit() {
    if (this.isValid) {
      // Keep track of the time of the transaction
      this.time = new Date();
      // Add the transaction to the account
      this.account.addTransaction(this);
      return true;
    }
    return false;

  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {
  get isValid() {
    if (this.amount < this.account.balance) {
      return true;
    }
    return false;
  }

  get value() {
    
    return -this.amount;
  }
  

}



const myAccount = new Account("snow-patrol");
// const t1 = new Deposit(50.25, myAccount);
const t2 = new Withdrawal(20.25, myAccount);
// t1.commit();
console.log(t2.commit(0));
console.log(myAccount.balance);

