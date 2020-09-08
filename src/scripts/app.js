import UrlParser from './routes/url-parser';
import routes from './routes/routes';

class App {
    constructor({ content, menu, drawer, main }) {
        this._content = content;
        this._menu = menu;
        this._drawer = drawer;
        this._main = main;
        this.onInit();
    }

    onInit() {
        this._menu.addEventListener('click', (event) => {
            this._drawer.classList.toggle('open');
            event.stopPropagation();
        });
        this._main.addEventListener('click', () => {
            this._drawer.classList.remove('open');
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
        this._drawer.classList.remove('open');
    }
}

export default App;
