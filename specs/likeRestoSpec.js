import LikeButtonInitiator from '../src/scripts/like-button-initiator';
import FavoriteIdb from '../src/scripts/data/database-idb';

describe('Menyukai Restoran', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
   
    beforeEach(() => {
        addLikeButtonContainer();
    });
   
    it('harusnya menampilkan tombol suka', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="Klik kalau suka"]')).toBeTruthy();
    });
   
    it('harusnya tombol batal suka tidak ditampilkan', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="Klik kalau gak jadi suka"]')).toBeFalsy();
    });
   
    it('harusnya berhasil menekan tombol suka', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
   
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const resto = await FavoriteIdb.getFavorite(1);
        
        expect(resto).toEqual({ id: 1 });
        
        FavoriteIdb.deleteFavorite(1);
    });
  });