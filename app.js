let numHabitantes 
let numHermandad1
let numHermandad2
let numHermandad3
let numHermandad4
let numHermandad5

let coeficienteHab
let crecimientoHer = 1

const date = new Date(2023, 0, 1)
let dia = date.getDate()
let mes = date.getMonth()
let anyo = date.getFullYear()

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];

window.addEventListener('load', function() {
    numHabitantes = 124231
    numHermandad1 = 14321
    numHermandad2 = 21453
    numHermandad3 = 18752
    numHermandad4 = 20283
    numHermandad5 = 8478
    mes = meses[0]
    document.getElementById("habitantes").textContent = numHabitantes
    document.getElementById("hermandad1").textContent += numHermandad1
    document.getElementById("hermandad2").textContent += numHermandad2
    document.getElementById("hermandad3").textContent += numHermandad3
    document.getElementById("hermandad4").textContent += numHermandad4
    document.getElementById("hermandad5").textContent += numHermandad5
    document.getElementById("dia").textContent = dia
    document.getElementById("mes").textContent = mes
    document.getElementById("anyo").textContent = anyo
    
});

document.querySelectorAll("button").forEach(elem => {
    elem.addEventListener("click", e => {
        if(elem.id == "botonDia") {
            date.setDate(date.getDate() + 1)
            document.getElementById("dia").textContent = date.getDate()
            document.getElementById("mes").textContent = meses[date.getMonth()]
            document.getElementById("anyo").textContent = date.getFullYear()

            coeficienteHab = Math.random().toFixed(1) * 0.0001
            let crecimientoHab = Math.round(numHabitantes * coeficienteHab)
            numHabitantes += crecimientoHab
            console.log(crecimientoHer)
            numHermandad1 += (crecimientoHer * 2)
            numHermandad2 += crecimientoHer * 3
            numHermandad3 += crecimientoHer * 2
            numHermandad4 += crecimientoHer * 1
            numHermandad5 += crecimientoHer * 1

            document.getElementById("habitantes").textContent = numHabitantes
            document.getElementById("hermandad1").textContent = `Hermandad1: ${numHermandad1}`
            document.getElementById("hermandad2").textContent = `Hermandad2: ${numHermandad2}`
            document.getElementById("hermandad3").textContent = `Hermandad3: ${numHermandad3}`
            document.getElementById("hermandad4").textContent = `Hermandad4: ${numHermandad4}`
            document.getElementById("hermandad5").textContent = `Hermandad5: ${numHermandad5}`
        } else {
            for (let i =0; i<= 30;i++){
                coeficienteHab = Math.random().toFixed(1) * 0.0001
                let crecimientoHab = Math.round(numHabitantes * coeficienteHab)
                numHabitantes += crecimientoHab 
                numHermandad1 += crecimientoHer * 2
                numHermandad2 += crecimientoHer * 3
                numHermandad3 += crecimientoHer * 2
                numHermandad4 += crecimientoHer * 1
                numHermandad5 += crecimientoHer * 1
                
                document.getElementById("habitantes").textContent = numHabitantes
                document.getElementById("hermandad1").textContent = `Hermandad1: ${numHermandad1}`
                document.getElementById("hermandad2").textContent = `Hermandad2: ${numHermandad2}`
                document.getElementById("hermandad3").textContent = `Hermandad3: ${numHermandad3}`
                document.getElementById("hermandad4").textContent = `Hermandad4: ${numHermandad4}`
                document.getElementById("hermandad5").textContent = `Hermandad5: ${numHermandad5}`
            }
            date.setMonth(date.getMonth() + 1)
            document.getElementById("mes").textContent = meses[date.getMonth()]
            document.getElementById("anyo").textContent = date.getFullYear()
        }
    });
});