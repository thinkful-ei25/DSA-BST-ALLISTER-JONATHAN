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

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, 
      //then you replace the node with its left child.  
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //And similarly if the node only has a right child 
      //then you replace it with its right child.
      else if (this.right) {
        this._replaceWith(this.right);
      }
      //If the node has no children then
      //simply remove it and any references to it 
      //by calling "this._replaceWith(null)".
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  print(BST){
    if(BST.key === null){
      return;
    }
    this.print(BST.left);
    this.print(BST.right);
    console.log(BST.key);
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  findHeightHelper(node){
    if(node === null){
      return 0;
    }
    let rightHeight = this.findHeightHelper(node.right);
    let leftHeight = this.findHeightHelper(node.left);

    return rightHeight > leftHeight ? rightHeight + 1 : leftHeight + 1;  
  }

  findHeight(){
    console.log(this.key);
    return Math.max(this.findHeightHelper(BST.left), this.findHeightHelper(BST.right));
  }
}

const BST = new BinarySearchTree();
const array = [3, 1, 4, 6, 9, 2, 5, 7, 0, 8];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < array.length; i++){
  BST.insert(array[i], arrayTwo[i]);
}
console.log(BST.findHeight());