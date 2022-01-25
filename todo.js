//todolarin secilmesi

const yeniVezife = document.querySelector('.input-vezife')
const yeniVezifeElaveetBtn = document.querySelector('.btn-vezife-elaveet')


const vezifeSiyahisi = document.querySelector('.vezife-siyahisi')

//addEventListener


yeniVezifeElaveetBtn.addEventListener('click', vezifeElaveEt)
vezifeSiyahisi.addEventListener('click', vezifeTamamlaSil)


function vezifeTamamlaSil (e){
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('vezife-btn-tamamlandi')) {
        kliklenenElement.parentElement.classList.toggle('vezife-tamamlandi')
    }
    if(kliklenenElement.classList.contains('vezife-btn-sil')){
    kliklenenElement.parentElement.classList.toggle('sil')
}
}


function vezifeElaveEt() {

    const vezifeDiv = document.createElement('div')
    // <div></div>

    vezifeDiv.classList.add('vezife-item')

    // <div class="vezife-item"


    const vezifeLi = document.createElement('li')

    vezifeLi.classList.add('vezife-tanitim')

    vezifeLi.innerText = yeniVezife.value

    vezifeDiv.appendChild(vezifeLi)

    const vezifeTamamlandiBtn = document.createElement('button')
    vezifeTamamlandiBtn.classList.add('vezife-btn')
    vezifeTamamlandiBtn.classList.add('vezife-btn-tamamlandi')


    vezifeTamamlandiBtn.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'


    vezifeDiv.appendChild(vezifeTamamlandiBtn)

    const vezifeSil = document.createElement('button')
    vezifeSil.classList.add('vezife-btn')
    vezifeSil.classList.add('vezife-btn-sil')

    vezifeSil.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
    vezifeDiv.appendChild(vezifeSil)

    vezifeSiyahisi.appendChild(vezifeDiv)

    yeniVezife.value = ''
}
