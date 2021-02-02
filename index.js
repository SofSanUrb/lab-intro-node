class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a > b ? 1 : -1)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length && pos >= 0) {
      return this.items[pos]
    }
    else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let num = 0;

    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      for ( let i=0; i<this.items.length; i++) {
        if (this.items[i] > num){
          num = this.items[i]
        }
      }
      return num
    }
  }

  min() {
    let num = this.items[0];

    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      for ( let i=0; i<this.items.length; i++) {
        if (this.items[i] < num){
          num = this.items[i]
        }
      }
      return num
    }
  }

  sum() {
    let sum =this.items.reduce((acc, elem) =>{
      return acc + elem
    }, 0)
    return sum
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
    let sum = this.sum()
    return sum / this.items.length
    }
  }
}

let newObj = new SortedList()
module.exports = SortedList;
