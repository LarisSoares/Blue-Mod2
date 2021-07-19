const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar')

elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/mal humor.jpg' 
        elementoNome.innerText = 'Fred' 
        elementoSituacao.innerText = 'Fred de Mal Humor' 
        elementoBtn.value = 'segundo' 
    }
    else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/chorando.jpg'  
        elementoNome.innerText = 'Fred o Gato'
        elementoSituacao.innerText = 'Fred chorando'
        elementoBtn.value = 'terceiro' 
    }
    else if(elementoBtn.value == 'terceiro') {
        elementoImg.src = './assets/img/seduzindo.jpg' 
        elementoNome.innerText = 'Fred o Sedutor'
        elementoSituacao.innerText = 'Fred Seduzindo'
        elementoBtn.value = 'quarto' 
    }else {
        elementoImg.src = './assets/img/bm humor.jpg'
        elementoNome.innerText = 'Fred de bom humor' 
        elementoSituacao.innerText = 'Fred Sorrindo '
        elementoBtn.value = 'primeiro' 
    }
})