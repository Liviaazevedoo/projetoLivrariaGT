const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const searchContainer = document.getElementById ('booksContainer')

searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    fetchBooks (query)
})
const produtos = [
    {
        img: '/assets/livro1.png',
        titulo: 'Ponto de Inflexão',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: true
    },
    {
        img: '/assets/livro2.png',
        titulo: 'O poder do aprendizado contínuo',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: true
    },
    {
        img: '/assets/livro3.png',
        titulo: 'Mais esperto que o Diabo 2',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: false
    },
    {
        img: '/assets/livro4.png',
        titulo: 'O que se come no céu',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: true
    },
    {
        img: '/assets/livro1.png',
        titulo: 'Psicologia Financeira',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: true
    },
    {
        img: '/assets/livro1.png',
        titulo: 'A meta',
        categoria: 'Desenvolvimento Pessoal',
        preco: 69.99,
        desconto: false
    }

]

