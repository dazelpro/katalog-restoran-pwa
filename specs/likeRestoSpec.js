import LikeButtonInitiator from '../src/scripts/like-button-initiator';
import FavoriteMovieIdb from '../src/scripts/data/database-idb';

describe('Liking A Movie', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
   
    beforeEach(() => {
        addLikeButtonContainer();
    });
   
    it('should show the like button when the movie has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
    });
   
    it('should not show the unlike button when the movie has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
    });
   
    it('should be able to like the movie', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data: {
                id: 1,
            },
        });
   
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const movie = await FavoriteMovieIdb.getFavorite(1);
    
        FavoriteMovieIdb.deleteFavorite(1);
    });
  });