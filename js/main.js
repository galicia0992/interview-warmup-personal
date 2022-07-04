const sb = document.querySelector("#sb")
const tcse = document.querySelector("#tcse")
const ah = document.querySelector("#ah")
const agpa = document.querySelector("#agpa")
const fqm = document.querySelector("#fqm")
const pca = document.querySelector("#pca")
const edcj = document.querySelector("#edcj")
const cp = document.querySelector("#cp")
const od = document.querySelector("#od") 
const buttons = document.querySelector(".buttons")
const fill = document.querySelector(".fill")
const backContainer = document.querySelector(".backContainer")
const bienvenida = document.querySelector(".bienvenida")
const datosDeIngles = document.querySelector("#datosDeIngles")
const imgIlustracion = document.querySelector(".imgIlustracion")



sb.addEventListener("click", saludYBiologia)
tcse.addEventListener("click", turismoSocialesEdu)
ah.addEventListener("click", artesHumanidades)
agpa.addEventListener("click", agriculturaGanaderiaPescaAlimentacion)
fqm.addEventListener("click", fisicaQuimicaMatematicas)
pca.addEventListener("click", periodismoComunicacion)
edcj.addEventListener("click", economiaDerechoCienciasJuridicas)
cp.addEventListener("click", cienciasPoliticas)
od.addEventListener("click", ocioDeportes)

function botonesInicio(){
    imgIlustracion.classList.add("d-none")
    buttons.classList.remove("d-none")
    bienvenida.classList.add("d-none")
    console.log("a")
}
window.onload = function inicio(){
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        
       hola.innerHTML = `<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>

    <div class="content" >
        <p>Hola!</p>
        <div class="visible">
            <ul>
                <li>${data.saludBiologia[Math.floor(Math.random() * data.saludBiologia.length)].name}</li>
                <li>${data.turismoSocialesEducacion[Math.floor(Math.random() * data.turismoSocialesEducacion.length)].name}</li>
                <li>${data.artesHumanidades[Math.floor(Math.random() * data.artesHumanidades.length)].name}</li>
                <li>${data.agriculturaGanaderiaPescaAlimentacion[Math.floor(Math.random() * data.agriculturaGanaderiaPescaAlimentacion.length)].name}</li>
                <li>${data.fisicaQuimicaMatematicas[Math.floor(Math.random() * data.fisicaQuimicaMatematicas.length)].name}</li>
                <li>${data.periodismoComunicacion[Math.floor(Math.random() * data.periodismoComunicacion.length)].name}</li>
                <li>${data.economiaDerechoCienciasJuridicas[Math.floor(Math.random() * data.economiaDerechoCienciasJuridicas.length)].name}</li>
                <li>${data.cienciasPoliticas[Math.floor(Math.random() * data.cienciasPoliticas.length)].name}</li>
                <li>${data.ocioDeportes[Math.floor(Math.random() * data.ocioDeportes.length)].name}</li>
            </ul>
        </div>   
    </div>`

    //loop de datos
    data.informacion.map(item =>{
        datosDeIngles.innerHTML = item.dato
        let cont = 0
        setInterval(inicio, 4000)
    function inicio(){
        cont++
        if(item.id == cont){
             datosDeIngles.innerHTML = `${item.dato} <br>-<strong>${item.fuente}</strong>`
            }
        }
        setInterval(() => {
        if(cont == 5){
            cont = 0
            inicio()
        }
    }, 1);
})
})
}

function saludYBiologia(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.saludBiologia.forEach(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
            
        })
    
    
        
        const medG = document.querySelector("#medG")
        const medC = document.querySelector("#medC")
        const medCP = document.querySelector("#medCP")
        const medO = document.querySelector("#medO")
        const bioM = document.querySelector("#bioM")
        medG.addEventListener("click", medicoGeneral)
        medC.addEventListener("click", medicoCirujano)
        medCP.addEventListener("click", medicoCirujanoPartero)
        medO.addEventListener("click", medicoOftalmologo)
        bioM.addEventListener("click", biologoMarino)
    })
    back()
}

function turismoSocialesEdu(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.turismoSocialesEducacion.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
    
        const rec = document.querySelector("#rec")
        const rep = document.querySelector("#rep")
        const mae = document.querySelector("#maeE")
        rec.addEventListener("click", recepionista)
        rep.addEventListener("click", reportero)
        mae.addEventListener("click", maestroDeEspañol)
    })
    back()
}

function artesHumanidades(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.artesHumanidades.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const esc = document.querySelector("#esc")
        esc.addEventListener("click", escultor)
    })
    back()
}

function agriculturaGanaderiaPescaAlimentacion(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.agriculturaGanaderiaPescaAlimentacion.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const igc = document.querySelector("#igc")
        const capE = document.querySelector("#capE")
        igc.addEventListener("click", inspectorDeCalidad)
        capE.addEventListener("click", capitanDeEmbarcacion)
    })
    back()
}

function fisicaQuimicaMatematicas(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.fisicaQuimicaMatematicas.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const dat = document.querySelector("#dat")
        const lab = document.querySelector("#lab")
        const maeF = document.querySelector("#maeF")
        dat.addEventListener("click", dataScience)
        lab.addEventListener("click", laboratorista)
        maeF.addEventListener("click", maestroDeFisica)
    })
    back()
}

function periodismoComunicacion(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.periodismoComunicacion.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const loc = document.querySelector("#loc")
        const pres = document.querySelector("#pres")
        loc.addEventListener("click", locutor)
        pres.addEventListener("click", presentador)
    })
    back()
}

function economiaDerechoCienciasJuridicas(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.economiaDerechoCienciasJuridicas.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const eco = document.querySelector("#eco")
        const aboF = document.querySelector("#aboF")
        eco.addEventListener("click", economista)
        aboF.addEventListener("click", abogadoFiscalista)
    })
    back()
}

function cienciasPoliticas(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.cienciasPoliticas.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const pol = document.querySelector("#pol")
        pol.addEventListener("click", politologo)
    })
    back()
}

function ocioDeportes(){
    puesto()
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.ocioDeportes.map(item =>{
            console.log(item)
            const {id, name} = item
            buttons.innerHTML += `<button class="fill slide" role="button" id="${id}"><div>${name}</div><i class="icon-arrow-right"></i></button> `
        })
        const ltp = document.querySelector("#ltp")
        const mef = document.querySelector("#mef")
        ltp.addEventListener("click", topLaner)
        mef.addEventListener("click", educacionFisica)
    })
    back()
}

function operacionVoz(){
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'es-MX';
    recognition.start()
    recognition.onstart = function(){
        console.log("escuchando...")
    }
    recognition.onspeechend = function(){
        console.log("alto")
        recognition.stop()
    }
    recognition.onresult = function(e){
        const res = e.results[0][0].transcript
        let resultVoz = res
        console.log(resultVoz)
        voz(resultVoz)
        inputEscucha.value = resultVoz
    }
    
}

let voiceArr = ["esto es una prueba"]

function voz(a){
    var msg = new SpeechSynthesisUtterance("inicio");
    msg.lang = 'en-US';
    msg.text = a
    window.speechSynthesis.speak(msg);
}

function back(){
    backContainer.innerHTML = `<button class="fill2" id="back" onclick="location.reload()">Atras</button>`
}

function puesto(){
    buttons.classList.add("ape")
    while(buttons.firstChild){
        buttons.removeChild(buttons.firstChild)
        
    }
}

//botones de entrevista
function medicoGeneral(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Medico General</h2>
			<button type="button" class="btnC" id="btn1" data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("medG")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
}

function medicoCirujano(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Medico Cirujano</h2>
			<button class="btnC" id="btn2"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("medCir")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="saludYBiologia()">Atras</button>`
}
function medicoCirujanoPartero(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Medico Cirujano Partero</h2>
			<button class="btnC" id="btn3"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("medCp")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="saludYBiologia()">Atras</button>`
}
function medicoOftalmologo(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Medico Oftalmologo</h2>
			<button class="btnC" id="btn4"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("medOf")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="saludYBiologia()">Atras</button>`
}
function biologoMarino(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Biologo Marino</h2>
			<button class="btnC" id="btn5"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("bioMa")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="saludYBiologia()">Atras</button>`
}
function recepionista(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Recepcionista</h2>
			<button class="btnC" id="btn6" data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("recep")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="turismoSocialesEdu()">Atras</button>`
}
function reportero(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Reportero</h2>
			<button class="btnC" id="btn2" id="btn7"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("repor")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="turismoSocialesEdu()">Atras</button>`
}
function maestroDeEspañol(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Maestro de Español</h2>
			<button class="btnC" id="btn2" id="btn8"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("maeEs")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="turismoSocialesEdu()">Atras</button>`
}
function escultor(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Escultor</h2>
			<button class="btnC" id="btn2" id="btn9"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("escul")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="artesHumanidades()">Atras</button>`
}
function inspectorDeCalidad(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Inspector de Calidad</h2>
			<button class="btnC" id="btn2" id="btn10"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("inspecCal")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="agriculturaGanaderiaPescaAlimentacion()">Atras</button>`
}
function capitanDeEmbarcacion(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Capitan de Embarcacion</h2>
			<button class="btnC" id="btn2" id="btn11"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("capEm")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="agriculturaGanaderiaPescaAlimentacion()">Atras</button>`
}
function dataScience(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Data Science</h2>
			<button class="btnC" id="btn2" id="btn12"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("dataS")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="fisicaQuimicaMatematicas()">Atras</button>`
}
function laboratorista(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Laboratorista</h2>
			<button class="btnC" id="btn2" id="btn13"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("lab")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="fisicaQuimicaMatematicas()">Atras</button>`
}
function maestroDeFisica(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Maestro de Fisica</h2>
			<button class="btnC" id="btn2" id="btn14"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("maeF")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="fisicaQuimicaMatematicas()">Atras</button>`
}
function locutor(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Locutor</h2>
			<button class="btnC" id="btn2" id="btn15"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("loc")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="periodismoComunicacion()">Atras</button>`
}
function presentador(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Presentador</h2>
			<button class="btnC" id="btn2" id="btn16"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("pres")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="periodismoComunicacion()">Atras</button>`
}
function economista(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Economista</h2>
			<button class="btnC" id="btn2" id="btn17"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("eco")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="economiaDerechoCienciasJuridicas()">Atras</button>`
}
function abogadoFiscalista(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Abogado Fiscalista</h2>
			<button class="btnC" id="btn2" id="btn18"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("aboFis")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="economiaDerechoCienciasJuridicas()">Atras</button>`
}
function politologo(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Politologo</h2>
			<button class="btnC" id="btn2" id="btn19"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("poli")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="cienciasPoliticas()">Atras</button>`
}
function topLaner(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>LOL Top Laner</h2>
			<button class="btnC" id="btn2" id="btn20"  data-toggle="modal" data-target="#form">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("topL")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="ocioDeportes()">Atras</button>`
}
function educacionFisica(){
    puesto()
    buttons.innerHTML += `<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Interview Language</h6>
			<h2>English</h2>
		</div>
		<div class="course-info">
			<h6>Position</h6>
			<h2>Maestro de Educacion FIsica</h2>
			<button class="btnC" id="btn2" id="btn21  data-toggle="modal" data-target="#form"">Continue</button>
		</div>
	</div>
</div>`
buttons.insertAdjacentHTML("afterend", `<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content py-md-5 px-md-4 p-sm-3 p-4">
                <h3>Estas Lista/o</h3>
                <i class="fa fa-bell"></i>
                <p class="r3 px-md-5 px-sm-1 w-100">Contesta todas las preguntas lo mejor que puedas</p>
                <div class="text-center mb-3 w-100"> <button class="btn btn-primary w-50 rounded-pill b1" onclick=siguiente("maeEd")>Iniciar</button> </div>
            <a href="#">Not now</a>
        </div>
    </div>`)
backContainer.innerHTML = `<button class="fill2" id="back" onclick="ocioDeportes()">Atras</button>`
}

let num = 0
function siguiente(a){
    fetch("data.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        document.body.classList.remove("modal-open")
        document.body.classList.remove("color")
        document.body.classList.add("preguntas")
        data.entrevista.map(item =>{
            console.log(item)
            if(item.id == a && num == 1){
                document.body.innerHTML =  `
            <div class="contenedor">
            <div class="card-contenedor">
                <h5 class="pregunta-card">Question 1</h5>
                    <p>${item.pregunta1}</p>
                <div class="espacio">
                    <input type="text" id="inputEscucha" class="inputEscucha">
                </div>
                <div class="botones">
                    <button class="boton-answer" onclick=operacionVoz()>Answer</button>
                    <button class="boton-siguiente" onClick=siguiente("${item.id}")>Next</button>
                </div>
            </div>
        </div>`
           voz(item.pregunta1)
            }
            if(item.id == a && num == 2){
                document.body.innerHTML =  `
            <div class="contenedor">
            <div class="card-contenedor">
                <h5 class="pregunta-card">Question 2</h5>
                    <p>${item.pregunta2}</p>
                <div class="espacio">
                    <input type="text" id="inputEscucha" class="inputEscucha">
                </div>
                <div class="botones">
                    <button class="boton-answer" onclick=operacionVoz()>Answer</button>
                    <button class="boton-siguiente" onClick=siguiente("${item.id}")>Next</button>
                </div>
            </div>
        </div>`
        voz(item.pregunta2)
            }
            if(item.id == a && num == 3){
                document.body.innerHTML =  `
            <div class="contenedor">
            <div class="card-contenedor">
                <h5 class="pregunta-card">Question 3</h5>
                    <p>${item.pregunta3}</p>
                <div class="espacio">
                    <input type="text" id="inputEscucha" class="inputEscucha">
                </div>
                <div class="botones">
                    <button class="boton-answer" onclick=operacionVoz()>Answer</button>
                    <button class="boton-siguiente" onClick=siguiente("${item.id}")>Next</button>
                </div>
            </div>
        </div>`
        voz(item.pregunta3)
            }
            if(item.id == a && num == 4){
                document.body.innerHTML =  `
            <div class="contenedor">
            <div class="card-contenedor">
                <h5 class="pregunta-card">Question 4</h5>
                    <p>${item.pregunta4}</p>
                <div class="espacio">
                    <input type="text" id="inputEscucha" class="inputEscucha">
                </div>
                <div class="botones">
                    <button class="boton-answer" onclick=operacionVoz()>Answer</button>
                    <button class="boton-siguiente" onClick=siguiente("${item.id}")>Next</button>
                </div>
            </div>
        </div>`
        voz(item.pregunta4)
            }
        })
    })
    num++
        console.log(num)
}