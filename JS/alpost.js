const teslaList = document.querySelector('.post');

const search = document.querySelector('.biznes__search');


// const searchUrl = 'https://api.newscatcherapi.com/v2/search?q=d3e3cb7ae700461b973257070435d351&query';

let currentPage = 1;


const fragment = document.createDocumentFragment();

// const imagesUrl = 'https://image.tmdb.org/t/p/w500';

let url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-03-15&sortBy=publishedAt&apiKey=d3e3cb7ae700461b973257070435d351'

async function fetchData() {

    if (!search.value) {
        url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-15&sortBy=publishedAt&apiKey=d3e3cb7ae700461b973257070435d351&page=${currentPage}`
    } else {
        url = `https://api.newscatcherapi.com/v2/search?q=d3e3cb7ae700461b973257070435d351&query=${search.value}`
    }



    try {
        const response = await fetch(url);
        const data = await response.json();

        teslaList.innerHTML = '';

        console.log(data.articles);

        data.articles.slice(1, 8).map((tesla) => {
            // console.log(tesla);



            const teslaBox = document.createElement('div');
            teslaBox.classList.add('posts__tesla-box');
            teslaList.appendChild(teslaBox);


            const imgBox = document.createElement('div')
            imgBox.classList.add('posts__imgBox');
            teslaBox.appendChild(imgBox);

            const textBox = document.createElement('div');
            textBox.classList.add('posts__textBox');
            teslaBox.appendChild(textBox);



            const images = document.createElement('img');
            images.classList.add('posts__img3');
            images.src = tesla.urlToImage;
            images.alt = tesla.title;

            const title = document.createElement('h3');
            title.classList.add('posts__title3');
            title.textContent = tesla.title;

            const span = document.createElement('span')
            span.classList.add('posts__title5');
            span.textContent = tesla.author;

            const text = document.createElement('p');
            text.classList.add('posts__text');
            text.textContent = tesla.content




            imgBox.appendChild(images);
            textBox.appendChild(span);
            textBox.appendChild(title);
            textBox.appendChild(text);
            // teslaList.appendChild(fragment);

            // teslaBox.appendChild(images);
            // teslaBox.appendChild(span);
            // teslaBox.appendChild(title);
            // teslaBox.appendChild(text);


            // fragment.appendChild(teslaBox);

            // teslaList.appendChild(fragment);

            const paginationWrapper = document.querySelector('.pagination__wrapper');
            paginationWrapper.innerHTML = '';
            if (data.totalResults > 1) {
                for (let i = 1; i <= 5; i++) {
                    const button = document.createElement('buttons');
                    button.textContent = i;
                    if (currentPage === i) {
                        button.classList.add('active');
                    }

                    button.addEventListener('click', () => {
                        currentPage = i;
                        fetchData();
                    })

                    paginationWrapper.appendChild(button);
                }
            }






        })

    } catch (error) {
        console.log(error);
    }
}

fetchData();

search.addEventListener('input', () => {
    fetchData();
})