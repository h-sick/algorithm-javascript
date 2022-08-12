function solution(skill, skill_trees) {
  let answer = 0;
  const splitedSkills = skill.split("");
  for (const skill_tree of skill_trees) {
    let canLearn = true;
    const skills = [...splitedSkills];
    for (const eachSkill of skill_tree) {
      if (skills.includes(eachSkill)) {
        if (skills[0] !== eachSkill) {
          canLearn = false;
          break;
        }
        skills.shift();
      }
    }
    if (canLearn) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
