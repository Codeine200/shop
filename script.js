const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardContainer = document.querySelector('.content-main__list');

const cardList = [
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '170 $',
        address: 'Киев, вул. Хрещатик',
        date: '2025-09-30',
        img: './images/card-image.png'
    },

    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '230 $',
        address: 'Сумы, вул. Кирова',
        date: '2025-03-01',
        img: './images/card-image.png'
    },
];

const render = (cardList) => {
    cardContainer.innerHTML = '';
    cardList.forEach((item, idx) => {
        cardContainer.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>        
        `)
    });
}

const filteredArray = (array, value)=> {
    return array.filter(({title, price}) => {
        return title.includes(value) || price.includes(value) ;
    });
};

render(cardList);

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardList, searchInput.value));
});