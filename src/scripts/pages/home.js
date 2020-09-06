import sourceData from '../data/source';

const Home = {
    async render() {
        return `
        <section class="content">
            <div class="latest">
                <h1>Explore Restaurant</h1>
                <div class="list" id="tes"></div>
            </div>
        </section>
        `;
    },
   
    async afterRender() {
        const resto = await sourceData.listResto();
        let dataList = '';
        console.log(resto['restaurants']);
        resto['restaurants'].forEach(function(data) {
            dataList +=`
            <div class="list_item">
                <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
                <div class="city">${data['city']}</div>
                <div class="list_item_content">
                    <p class="list_item_rating">
                        Rating : 
                        <a href="#" class="list_item_rating_value">${data['rating']}</a>
                    </p>
                    <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
                    <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
                </div>
            </div>
            `;
        });
        document.querySelector('#tes').innerHTML = dataList;  
    },
};
   
export default Home;