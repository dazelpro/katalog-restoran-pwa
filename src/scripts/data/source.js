import ENDPOINT from './end-point';
 
class sourceData {

    static async listResto() {
        const response = await fetch(ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson;
    }
    
    static async detailResto(id) {
        const response = await fetch(ENDPOINT.DETAIL(id));
        return response.json();
    }
}
 
export default sourceData;