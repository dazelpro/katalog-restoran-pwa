import ENDPOINT from './end-point';
 
class sourceData {

    static async listResto() {
        const response = await fetch(ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson;
    }
 
    // static async upcomingMovies() {
    //     const response = await fetch(API_ENDPOINT.UPCOMING);
    //     const responseJson = await response.json();
    //     return responseJson.results;
    // }
    
    // static async detailMovie(id) {
    //     const response = await fetch(API_ENDPOINT.DETAIL(id));
    //     return response.json();
    // }
}
 
export default sourceData;