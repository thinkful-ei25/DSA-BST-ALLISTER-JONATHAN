'use strict';

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value){
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if(key < this.key){
      if(this.left === null){
        this.left = new BinarySearchTree(key, value, this);
      }
      else{
        this.left.insert(key, value);
      }
    }
    else{
      if (this.right === null){
        this.right = new BinarySearchTree(key, value, this);
      }
      else{
        this.right.insert(key, value);
      }
    }
  }

  find(key){
    if(this.key === key){
      return this.value;
    }

    else if(key < this.key && this.left){
      return this.left.find(key);
    }
    else if( key > this.key && this.right){
      return this.right.find(key);
    }
    else{
      throw new Error('Key Error');
    }
  }

  print(BST){
    if(BST === null){
      return;
    }
    this.print(BST.left);
    this.print(BST.right);
    console.log(BST.key);
  }
}

const BST = new BinarySearchTree();
const array = [3, 1, 4, 6, 9, 2, 5, 7, 0];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < array.length; i++){
  BST.insert(array[i], arrayTwo[i]);
}
//BST.print(BST);
console.log(BST.find(4));