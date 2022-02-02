import users from "./users.js";
let res =[]
const getSortedUniqueSkills = users =>{
     users.forEach(({skills}) => skills.forEach(e => res.push(e)));
     res.sort()
     res = [... new Set(res)]
     return(res)
}
      console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]