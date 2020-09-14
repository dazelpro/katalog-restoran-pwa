Feature('Liking Movies');

Before((I) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', (I) => {
    I.seeElement('#tes');
    I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});