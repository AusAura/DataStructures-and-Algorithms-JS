class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set(key, val) {
  //   let hashedKey = Math.abs(this._hash(key));
  //   console.log(hashedKey);
  //   if (this.keyMap[hashedKey]) {
  //     let correctSpot = this.keyMap[hashedKey].length;
  //     this.keyMap[hashedKey][correctSpot] = [key, val];
  //   }
  //   else {
  //     this.keyMap[hashedKey] = [];
  //     this.keyMap[hashedKey][0] = [key, val];
  //   }
  //   return this.keyMap;
  // }

  set(key, val) {
    let hashedKey = Math.abs(this._hash(key));
    if (!this.keyMap[hashedKey]) 
      this.keyMap[hashedKey] = [];
    this.keyMap[hashedKey].push([key, val]);
    return this.keyMap;
  }

  get (key) {
    let hashedKey = Math.abs(this._hash(key));
    if (this.keyMap[hashedKey]) {
      for (let each of this.keyMap[hashedKey]) {
        if (each[0] === key) return each[1];
      }
    }
    return undefined;
  }

  // keyMap[hash1[['Red', 16]], hash2[['Green', 163]], hash3[['Blue', 97], ['Blua1qrqrgbdc', 555]]]

  // keys(array=this.keyMap) { My failed attempt
  //   let newArray = [];
  //   let currentKey;
  //   for (let each of array) {
  //     if (!each) continue;
  //     if (each.length === 1) {
  //       currentKey = each[0][0];
  //       // console.log(each[0]);
  //       // console.log(each[0][0]);
  //     } else if (typeof each[0] === 'string') {
  //       currentKey = each[0];
  //     } 
  //     else currentKey = each;
  //     if (Array.isArray(currentKey)) newArray.concat(this.keys(currentKey)) 
  //     else newArray.push(currentKey);
  //   }
  //   return newArray;
  // }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j=0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j=0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

}

let test = new HashTable();
test.set('Red', 16);
test.set('Green', 163);
test.set('Blue', 97);
test.set('Blua1qrqrgbdc', 555);
// test.set('Blue', 555);
console.log(test.get('Blua1qrqrgbdc'));
console.log(test.get('Blue'));
console.log(test.get('Red'));
console.log(test.get('Valhalla'));
console.log(test.keys());
console.log(test.values())