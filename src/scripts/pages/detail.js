import sourceData from '../data/source';
import CONFIG from '../data/config';
import UrlParser from '../routes/url-parser';

const Detail = {
    async render() {
        return `
        <section class="content">
            <div class="latest">
                <h1 id="restoName"></h1>
                <div class="detail-content" id="detail"></div>
            </div>
        </section>
        `;
    },
   
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        let dataDetail = '';
        const data = await sourceData.detailResto(url.id);
        console.log(data)
        dataDetail += `
            <div class="list_item">
                <img class="list_item_img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM+data['restaurant']['pictureId']}" alt="${data['restaurant']['name']}" title="${data['restaurant']['name']}">
                <div class="city">${data['restaurant']['city']}</div>
                <div class="list_item_content">
                    <p class="list_item_rating">
                        Rating : 
                        <a href="#" class="list_item_rating_value">${data['restaurant']['rating']}</a>
                    </p>
                    <h1 class="list_item_title"><a href="/#/detail/${data['restaurant']['id']}">${data['restaurant']['name']}</a></h1>
                    <div class="list_item_desc">${data['restaurant']['description'].slice(0, 150)}...</div>
                </div>
            </div>
        `;
        document.querySelector('#restoName').innerHTML = `${data['restaurant']['name']}`;
        document.querySelector('#detail').innerHTML = dataDetail;  
    },
};
   
export default Detail;