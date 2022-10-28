function Node() {
  this.count = 0;
  this.child = new Map();
}

function insertTrie(word, root) {
  if (!root.has(word.length)) {
    root.set(word.length, new Node());
  }

  let node = root.get(word.length);
  for (const ch of word) {
    if (!node.child.has(ch)) {
      node.child.set(ch, new Node());
    }
    node.count++;
    node = node.child.get(ch);
  }
}

function searchTrie(query, root) {
  if (!root.has(query.length)) {
    return 0;
  }

  let node = root.get(query.length);

  for (const ch of query) {
    if (ch === "?") {
      return node.count;
    }
    if (!node.child.has(ch)) {
      return 0;
    }
    node = node.child.get(ch);
  }
}

function solution(words, queries) {
  const getReversedString = (string) => string.split("").reverse().join("");

  const forwardRoot = new Map();
  const backwardRoot = new Map();

  words.forEach((word) => {
    insertTrie(word, forwardRoot);
    insertTrie(getReversedString(word), backwardRoot);
  });

  const answer = Array(queries.length).fill(0);

  queries.forEach((query, i) => {
    const firstWordOfQuery = query[0];
    answer[i] =
      firstWordOfQuery === "?"
        ? searchTrie(getReversedString(query), backwardRoot)
        : searchTrie(query, forwardRoot);
  });

  return answer;
}

console.log(
  solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
  )
); // [3, 2, 4, 1, 0]
