function solution(words) {
  class Node {
    constructor(value = '') {
      this.value = value;
      this.count = 0;
      this.children = new Map();
    }
  }

  class Trie {
    constructor() {
      this.root = new Node();
    }

    insert(string) {
      // let root = this.root;
      this.root.count += 1;

      for (const char of string) {
        if (!this.root.children.has(char)) {
          this.root.children.set(char, new Node(this.root.value + char));
        }

        this.root = this.root.children.get(char);
        this.root.count += 1;
      }
    }

    getCount(string) {
      let count = 0;
      let root = this.root;

      for (const char of string) {
        count += 1;
        root = root.children.get(char);
        if (root.count === 1) {
          break;
        }
      }
      return count;
    }
  }

  const trie = new Trie();
  words.forEach(word => trie.insert(word));

  let result = 0;
  words.forEach(word => (result += trie.getCount(word)));
  return result;
}

console.log(solution(['go', 'gone', 'guild'])); // 7
console.log(solution(['abc', 'def', 'ghi', 'jklm'])); // 4
console.log(solution(['word', 'war', 'warrior', 'world'])); // 15
