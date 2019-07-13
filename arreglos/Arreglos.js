let animals = ["Conejo","Jirafa","Elefante","doggos","RatKatz","Rats"]

console.log(animals.length)

let dante = animals[4]
console.log(dante)

animals.push("Ganster")
animals.push("tortuga")

animals.pop()

console.log(animals)

animals.splice(2,1)

console.log(animals)

animals.splice(4,0,"meee")

console.log(animals)

animals.splice(0,1,"Metal Trump")

console.log(animals)


let i = animals.indexOf("doggos")
//arreglos.slice(inicio,final)
animals.slice(2)

let saludo = "Henlo fren , who u? "
let s_arr = saludo.split(",")
console.log(s_arr)

for(let i = 0; i<s_arr.length; i++)
  s_arr[i] = s_arr[i].toUpperCase()
let s = s_arr.join(" ")
console.log(s)

