const teslaList = document.querySelector('.card');


const fragment = document.createDocumentFragment();

// const imagesUrl = 'https://image.tmdb.org/t/p/w500';

let url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-03-17&sortBy=publishedAt&apiKey=d3e3cb7ae700461b973257070435d351'

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();


        console.log(data.articles);
        // console.log(threeData.articles);

        data.articles.slice(1, 4).map((tesla) => {
            // console.log(tesla);

            // const teslaBox = document.createComment('div');
            // teslaBox.classList.add('tesla-box');


            const teslaBox = document.createElement('div');
            teslaBox.classList.add('cards__tesla-box');
            teslaList.appendChild(teslaBox);


            const imgBox = document.createElement('div')
            imgBox.classList.add('cards__imgBox');
            teslaBox.appendChild(imgBox);

            const textBox = document.createElement('div');
            textBox.classList.add('cards__textBox');
            teslaBox.appendChild(textBox);



            const images = document.createElement('img');
            images.classList.add('cards__img3');
            images.src = tesla.urlToImage;
            images.alt = tesla.title;

            const title = document.createElement('h3');
            title.classList.add('cards__title3');
            title.textContent = tesla.title;

            const span = document.createElement('span')
            span.classList.add('cards__title5');
            span.textContent = tesla.publishedAt;

            const text = document.createElement('p');
            text.classList.add('cards__text');
            text.textContent = tesla.content


            imgBox.appendChild(images);
            textBox.appendChild(span);
            textBox.appendChild(title);
            textBox.appendChild(text);




            // fragment.appendChild(images);
            // fragment.appendChild(span);
            // fragment.appendChild(title);
            // fragment.appendChild(text);
            // teslaList.appendChild(fragment);

            // teslaBox.appendChild(images);
            // teslaBox.appendChild(span);
            // teslaBox.appendChild(title);
            // teslaBox.appendChild(text);


            // fragment.appendChild(teslaBox);

            teslaList.appendChild(fragment);







        })

    } catch (error) {
        console.log(error);
    }
}

fetchData();