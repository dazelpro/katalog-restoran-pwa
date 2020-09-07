import { openDB } from 'idb';
import CONFIG from './config';
 
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});
 
const FavoriteIdb = {
    async getFavorite(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllFavorite() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putFavorite(movie) {
        return (await dbPromise).put(OBJECT_STORE_NAME, movie);
    },
    async deleteFavorite(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};
 
export default FavoriteIdb;