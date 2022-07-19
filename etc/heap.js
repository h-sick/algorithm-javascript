class Heap {
  constructor() {
    this.nodes = [];
  }

  swap(index1, index2) {
    [this.nodes[index2], this.nodes[index1]] = [
      this.nodes[index1],
      this.nodes[index2],
    ];
  }

  add(node) {
    this.nodes.push(node);
    this.bubbleUp();
  }

  get() {
    const node = this.nodes[0];
    this.nodes[0] = this.nodes[this.size() - 1];
    this.nodes.pop();
    this.bubbleDown();
    return node;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.nodes[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.nodes[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.nodes[this.rightChildIndex(index)];
  }

  peek() {
    return this.nodes[0];
  }

  size() {
    return this.nodes.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.size() - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.nodes[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.nodes[index] ||
        this.rightChild(index) < this.nodes[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.nodes[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
}

class MaxHeap extends MinHeap {
  bubbleUp() {
    let index = this.size() - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.nodes[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.nodes[index] ||
        this.rightChild(index) > this.nodes[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.nodes[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }
}
