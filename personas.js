let personas = []
const list = document.getElementsByClassName("lista")
const li = document.createElement('li')


fetch("https://raw.githubusercontent.com/SantiagoPard/Sis-Dis/main/per.json")
    .then((res) => res.json())
    .then((data) => {
        personas = data;

        personas.forEach((persona, index) => {
            if (index % 2 == 0) {
                const list = document.querySelector(".lista")
                const li = document.createElement('li');
                li.innerHTML = "nombre: " + persona.nombre + "<br>cedula: " + persona.cedula + " <br>fecha: " + persona.fecha + " <br>estatura: " + persona.estatura;
                list.appendChild(li)
            }
        }
        )


    });
