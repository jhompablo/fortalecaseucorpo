const sobrepor = document.querySelectorAll('.sobrepor')



sobrepor.forEach(item => {
    item.addEventListener('click', e => {
        const img = document.createElement('img')
        const caminho = item.parentElement.children[0].getAttribute('src')
        document.querySelector('.modal-conteudo').appendChild(img).setAttribute('src', caminho)
        document.querySelector('.modal').classList.add('modal-abrir')
       
    })
})

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.modal-conteudo').children[0].remove()
    document.querySelector('.modal').classList.remove('modal-abrir')
})

