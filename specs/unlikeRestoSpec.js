import LikeButtonInitiator from '../src/scripts/like-button-initiator';
import FavoriteIdb from '../src/scripts/data/database-idb';

describe('Batal Menyukai Restoran', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
   
    beforeEach(() => {
        addLikeButtonContainer();
        FavoriteIdb.putFavorite({ id: 1 });
    });

    it('harusnya menampilkan tombol batal suka', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="Klik kalau gak jadi suka"]')).toBeTruthy();
    });

    it('harusnya berhasil menekan tombol batal suka', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
   
        document.querySelector('#likedButton').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllFavorite()).toEqual([]);
    });
   
  });