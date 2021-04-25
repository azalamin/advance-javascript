function add(first, second){
   let result = first + second;

   if(result > 9){
      let mood = 'happy';
      console.log(mood)
   }
   // console.log(mood)
   return result
}

const output = add(7, 3);
console.log(output)


let myName = 'Al-amin Sheikh';
function outPut(){
   myName = "Obaydul Islam"
   return myName
}
const result = outPut();

console.log(myName)
console.log(result)

{
   myName = 'Sabbir';
   console.log(myName)

}

{
   function add(num, num2){
      return num + num2;
   }

   const result = add(5, 10)
   console.log(result)
}

function research(){
   return add(5, 7)
}

const res = research()
console.log(res)

function add(){
   let logs = 'I am add'
   console.log(logs);

   function sum(){
      return 7+7;
   }
  return sum()
}

const resul = add()
// console.log(resul)


const sumss = sum()
console.log(sumss)