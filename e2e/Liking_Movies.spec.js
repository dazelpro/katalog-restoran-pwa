Feature('Liking Movies');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Like dan Batal Like', (I) => {
    I.see('Explore Restaurant', 'h1');
    I.click('Istana Emas', '.list_item_title');
    I.seeElement('#restoName');
    I.click("#likeButton");
    I.click("#likedButton");
});