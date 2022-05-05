function solution(new_id) {
  return new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-\_\.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '')
    .replace(/^.{0,3}$/, match =>
      (match + match[match.length - 1].repeat(2)).slice(0, 3)
    );
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
