//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor() {
    this.status = 'closed';
    this.sum = 0;
  }

  open() {
    if (this.status === 'closed') {
      this.status = 'opened';
    } else {
      throw new ValueError('account already opened');
    }
  }

  close() {
    if (this.status === 'opened') {
      this.status = 'closed';
      this.sum = 0;
    } else {
      throw new ValueError('account already closed');
    }
  }

  deposit(increase) {
    if (this.status === 'opened') {
      if (increase > 0) {
        this.sum += increase
      } else {
        throw new ValueError('cannot deposit negative amount');
      }
    } else {
      throw new ValueError('account need to be opened');
    }
  }

  withdraw(decrease) {
    if (this.status === 'opened') {
      if (decrease > 0) {
        if (decrease <= this.sum) {
          this.sum -= decrease;
        } else {
          throw new ValueError('cannot withdraw more than balace');
        }
      } else {
        throw new ValueError('cannot withdraw negative amount');
      }
    } else {
      throw new ValueError('account need to be opened');
    }
  }

  get balance() {
    if (this.status === 'opened') {
      return this.sum
    }
    throw new ValueError('account need to be opened');
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
