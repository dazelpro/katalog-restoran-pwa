import UrlParser from './url-parser';
import routes from './routes';
 
class App {
    constructor({ content }) {
        this._content = content;
        // this._initialAppShell();
    }
    // _initialAppShell() {
    //     DrawerInitiator.init({
    //         content: this._content,
    //     });
    // }
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}
 
export default App;