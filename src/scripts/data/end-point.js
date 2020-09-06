import CONFIG from './config';
 
const ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}list`,
    UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
    DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
};
 
export default ENDPOINT;