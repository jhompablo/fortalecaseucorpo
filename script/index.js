const capa = document.querySelector('.capa .conteudo p span')
const imunidade = document.querySelector('.imunidade')
const btnProduto = document.querySelector('#produto')
const imagem = document.querySelector('.material .conteudo .imagem')
const texto = document.querySelector('.material .conteudo .conteudo')
const material = document.querySelector('.material')
const seta = document.querySelector('.rodape .seta')


capa.addEventListener('click', () => {
    imunidade.scrollIntoView({top:0, behavior: 'smooth'})
})

btnProduto.addEventListener('click', () => {
    document.body.scrollTo({top: material.offsetTop, behavior: 'smooth'})
})


document.body.addEventListener('scroll', (e) => {
    if(material.getBoundingClientRect().top < 10){
        imagem.setAttribute('style','opacity:1; transform:translateX(0); transition:.5s')
    }else{
        imagem.setAttribute('style','opacity:0; transform:translateX(-100em); transition:.5s')
    }
})

document.body.addEventListener('scroll', () => {
    if(material.getBoundingClientRect().top < 10){
        texto.setAttribute('style','opacity:1; transform:translateX(0); transition:.5s; delay:600ms')
    }else{
        texto.setAttribute('style','opacity:0; transform:translateX(100em); transition:.5s; delay:600ms')
    }
})


document.body.addEventListener('scroll', () => {
    const pos = seta.getBoundingClientRect()
    const isVisible = pos.top >=0 && pos.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    if(isVisible){
        seta.classList.remove('hide')
    }else{
        seta.classList.add('hide')
    }
})


seta.addEventListener('click', (e) => {
    document.body.scrollTo({top: 0, behavior: 'smooth'})
})


//EVENTO BOTÃO COMPRAR
const checkout = () => {
    window.open('http://mon.net.br/tstaw')
}


//LINKS DAS PÁGINAS
document.querySelector('#parceiro').addEventListener('click', () => {
    window.open('parceiro.html')
})


document.querySelector('#dicas').addEventListener('click', () => {
    window.open('dicas_vendas.html')
})

