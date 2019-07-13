//funciones

function average(calif)
{
  let a = 0
  calif.map(function(calificacion){
    a+=calificacion
  })
  return a/calif.length
}
let calificaciones = [9,8,7]

//console.log(average(calificaciones))

//Arrow Function

average_arrow = (calif) => {
  let acum = 0
  calif.map((calificacion)=>{
    acum+=calificacion
  })
  return acum/calif.length
} 

console.log(average_arrow(calificaciones))