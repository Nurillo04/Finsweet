const btn = document.querySelector('.btn');


const add = btn.addEventListener('click', function() {
    myText();
})

function myText() {
    let massage, text;
    let errElement = document.getElementById('text')
    massage = document.getElementsByClassName('.err');
    text = document.getElementsByClassName('text');
    console.log(text);
}