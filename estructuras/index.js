let persona =
{
  nombre: "Samuel",
  ap: "Garcia",
  am: "Oropeza",
  edad:18,
  fechaNac: "19/09/0000",
  numTel: "7721464560",
  email: "mylo.42.garcia@gmail.com",
  calificaciones: [8,8,9,9,9,10]
}

console.log(persona)
let prom = 0
for(let i = 0; i<6; i++)
  prom+=persona.calificaciones[i]
prom/=6

persona.promedio = prom

console.log(prom)
