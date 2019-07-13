//loops

let arreglo = ["Rachopan","Ranchupa","Niu Metztitlayork","Doshei"]

//classic for
for(let i = 0; i<arreglo.length; i++)
  console.log("For "+arreglo[i])

//forEach
arreglo.forEach(function(equipo){
  console.log("ForEach "+equipo)
})
//for of
for(e of arreglo)
  console.log("For raro "+e)

// map

let new_arr = arreglo.map(function(eq){
  return eq.toLowerCase()
})

console.log("MAP "+new_arr)