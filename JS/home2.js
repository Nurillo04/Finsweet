const list = document.querySelector('.cards__item');
const list1 = document.querySelector('.cards__list');
const loading = document.querySelector('.js-loading');


function renderPosts(posts) {
    posts.slice(0, 3).forEach(post => {

        // let li = document.querySelector('list1');


        let img = document.createElement('img');
        img.src = post.url;
        img.width = '380';
        img.height = '318'

        let id = document.createElement('h5');
        id.textContent = post.id;

        let title = document.createElement('h3');
        title.textContent = post.title;

        let text = document.createElement('p');
        text.textContent = post.thumbnailUrl;

        // thumbnailUrl

        list1.appendChild(img);
        list1.appendChild(id);
        list1.appendChild(title);
        list1.appendChild(text);


        list.appendChild(list1);
    });
}



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
        loading.style.display = 'none';
        return renderPosts(data)
    })
    .catch((err) => console.error(err));

//renderPosts(data));