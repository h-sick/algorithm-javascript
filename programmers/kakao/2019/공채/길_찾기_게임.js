function solution(nodeinfo) {
  const nodes = nodeinfo
    .map((info, i) => [...info, i + 1])
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  class BinaryTree {
    constructor(x, value) {
      this.x = x;
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(x, value) {
      if (x < this.x) this.toLeft(x, value);
      if (x > this.x) this.toRight(x, value);
    }

    toLeft(x, value) {
      if (this.left) this.left.insert(x, value);
      else this.left = new BinaryTree(x, value);
    }

    toRight(x, value) {
      if (this.right) this.right.insert(x, value);
      else this.right = new BinaryTree(x, value);
    }
  }

  const binaryTree = new BinaryTree(nodes[0][0], nodes[0][2]);
  for (let i = 1; i < nodes.length; i++) {
    binaryTree.insert(nodes[i][0], nodes[i][2]);
  }

  const result = [[], []];

  const preOrder = tree => {
    if (tree) {
      result[0].push(tree.value);
      preOrder(tree.left);
      preOrder(tree.right);
    }
  };

  const postOrder = tree => {
    if (tree) {
      postOrder(tree.left);
      postOrder(tree.right);
      result[1].push(tree.value);
    }
  };

  preOrder(binaryTree);
  postOrder(binaryTree);
  return result;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
); // [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
