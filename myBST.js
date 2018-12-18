'use strict';
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(data) 
  { 
    var newNode = new Node(data);
    if(this.root === null) 
      this.root = newNode; 
    else
      this._insertNode(this.root, newNode); 
  } 

  _insertNode(node, newNode) 
  { 
    if(newNode.data < node.data) 
    { 
      if(node.left === null) 
        node.left = newNode; 
      else
        this.insertNode(node.left, newNode);  
    } 
    else
    { 
      if(node.right === null) 
        node.right = newNode; 
      else
        this.insertNode(node.right,newNode); 
    } 
  } 

  removeNode(node, key) 
  { 
    if(node === null) 
      return null; 
    else if(key < node.data) 
    { 
      node.left = this.removeNode(node.left, key); 
      return node; 
    } 
    else if(key > node.data) 
    { 
      node.right = this.removeNode(node.right, key); 
      return node; 
    } 
    else
    { 
      if(node.left === null && node.right === null) 
      { 
        node = null; 
        return node; 
      } 
      if(node.left === null) 
      { 
        node = node.right; 
        return node; 
      } 
          
      else if(node.right === null) 
      { 
        node = node.left; 
        return node; 
      } 
      var aux = this.findMinNode(node.right); 
      node.data = aux.data; 
  
      node.right = this.removeNode(node.right, aux.data); 
      return node; 
    } 
  
  } 
  print(node){
    if(node === null){
      return;
    }
    console.log(node.data);
    this.print(node.left);
    this.print(node.right);
  }

  findHeight(node){
    if(node === null){
      return 0;
    }
    let rightHeight = this.findHeight(node.right);
    let leftHeight = this.findHeight(node.left);

    return rightHeight > leftHeight ? rightHeight + 1 : leftHeight + 1;  
  }
}

const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(10);
BST.insert(20);
BST.insert(3);
BST.print(BST.root);
console.log(BST.findHeight(BST.root));
console.log(BST);