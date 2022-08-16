function solution(enroll, referral, seller, amount) {
  const tree = {};
  tree['-'] = { parent: null, price: 0 };

  for (let i = 0; i < enroll.length; i++) {
    tree[enroll[i]] = { parent: referral[i], price: 0 };
  }

  const bottomUp = (name, price) => {
    const node = tree[name];
    if (!price || !node.parent) {
      return;
    }

    const commision = Math.floor(price / 10);
    node.price += price - commision;
    bottomUp(node.parent, commision);
  };

  for (let i = 0; i < seller.length; i++) {
    bottomUp(seller[i], amount[i] * 100);
  }

  return enroll.map(name => tree[name].price);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
); // [360, 958, 108, 0, 450, 18, 180, 1080]
// console.log(
//   solution(
//     ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
//     ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
//     ['sam', 'emily', 'jaimie', 'edward'],
//     [2, 3, 5, 4]
//   )
// ); // [0, 110, 378, 180, 270, 450, 0, 0]
