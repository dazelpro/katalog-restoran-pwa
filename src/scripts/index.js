import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './app';

const menu      = document.querySelector('#menu');
const hero      = document.querySelector('.hero');
const main      = document.querySelector('main');
const drawer    = document.querySelector('#drawer');

const app = new App({
    content: document.querySelector('#content'),
});

menu.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});

window.addEventListener('hashchange',  () => {
    app.renderPage();
});
   
window.addEventListener('load',  () => {
    app.renderPage();
});

// Fetch data json
// import ('../DATA.json').then(({default: jsonData}) => {
//     console.log(jsonData)
//     let datas = jsonData['restaurants']
//     let dataList = '';
//     datas.forEach(function(data) {
//         dataList +=`
//         <div class="list_item">
//             <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
//             <div class="city">${data['city']}</div>
//             <div class="list_item_content">
//                 <p class="list_item_rating">
//                     Rating : 
//                     <a href="#" class="list_item_rating_value">${data['rating']}</a>
//                 </p>
//                 <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
//                 <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
//             </div>
//         </div>
//         `;
//     });
//     document.querySelector('#tes').innerHTML = dataList;  
// });

// Fetch Data From API
// fetch('https://dicoding-restaurant-api.el.r.appspot.com/list')
//     .then(res => res.json())
//     .then((out) => {
//         console.log(out);
//     })
// .catch(err => console.error(err));