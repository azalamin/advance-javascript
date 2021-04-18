const students = [
   {id: 23, name: 'Salman Khan'},
   {id: 33, name: 'Omor Sunny'},
   {id: 43, name: 'Mannaaaaaa'},
   {id: 53, name: 'DipJol'},
   {id: 63, name: 'Moyouri'}
]

// let studentsName = []
// for (let index = 0; index < students.length; index++) {
//    const element = students[index];
//    studentsName.push(element.name) 
// }
// console.log(studentsName)

let studentsName = [];
let studentsId = [];
students.map(x => studentsName.push(x.name));
students.map(x => studentsId.push(x.id))
const biggerId = students.find(s => s.id > 50)
const names = students.filter(s => s.name)

console.log(biggerId)