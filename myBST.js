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
        this._insertNode(node.left, newNode);  
    } 
    else
    { 
      if(node.right === null) 
        node.right = newNode; 
      else
        this._insertNode(node.right,newNode); 
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
  inorder(node){
    if(node === null){
      return;
    }
    this.inorder(node.right);
    console.log(node.data);
    this.inorder(node.left);
  }

  findHeight(node){
    if(node === null){
      return 0;
    }
    let rightHeight = this.findHeight(node.right);
    let leftHeight = this.findHeight(node.left);

    return rightHeight > leftHeight ? rightHeight + 1 : leftHeight + 1;  
  }



  isBST(node, previousNode){
    if(node){
      if(!this.isBST(node.left))
        return false;
      if(previousNode && node.data <= previousNode.data)
        return false;
      return this.isBST(node.right, node);
    }
    return true;
  }

  KthLargestUsingMorrisTraversal(root, k){
    let curr = root;
    let Klargest = null;

    let count = 0;

    while(curr !== null){
      if(curr.right === null){
        if(++count === k)
          Klargest = curr;
        curr = curr.left;
      }

      else{
        let successor = curr.right;
        while(successor.left !== null && successor.left !== curr)
          successor = successor.left;
        
        if(successor.left === null){
          successor.left = curr;
          curr = curr.right;
        }

        else{
          successor.left = null;
          if(++count === k)
            Klargest = curr;
          curr = curr.left;
        }
      }
    }
    return Klargest;
  }

}

const BST = new BinarySearchTree();

BST.insert(5);
BST.insert(10);
BST.insert(20);
BST.insert(4);
BST.insert(3);
BST.insert(30);
BST.insert(40);
BST.insert(6);

/*
BST.root = new Node(5);
BST.root.left = new Node(10);
BST.root.left.left = new Node(15);
BST.root.right = new Node(2);
*/
//BST.inorder(BST.root);
console.log(BST.KthLargestUsingMorrisTraversal(BST.root, 4));

//console.log(BST.isBST(BST.root));

