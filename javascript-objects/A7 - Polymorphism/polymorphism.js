function Account(agency, account, balance){
    this.agency = agency,
    this.account = account,
    this.balance = balance
}

Account.prototype.withdraw = function(value){
    if(this.balance <= value){
        console.log('Insufficient balance.')
        this.show()
        return
    }
    this.balance -= value
    this.show()
}
Account.prototype.deposit = function(value){
    this.balance += value
    this.show()
}
Account.prototype.show = function(){
    console.log(`Agency/ account: ${this.agency}/${this.account}`)
    console.log(`Balance: R$ ${this.balance.toFixed(2)}`)
}

function CheckingAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance)
    this.limit = limit
}

CheckingAccount.prototype = Object.create(Account.prototype)
CheckingAccount.prototype.constructor = CheckingAccount

CheckingAccount.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit)){
        console.log('Insufficient balance.')
        this.show()
        return
    }
    this.balance -= value
    this.show()
}

function SavingsAccount(agency, account, balance){
    Account.call(this, agency, account, balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

const cc = new CheckingAccount(11, 22, 0, 100)
const cp = new SavingsAccount(12, 33, 0)
cp.deposit(10)
cp.withdraw(10)
cp.withdraw(1)