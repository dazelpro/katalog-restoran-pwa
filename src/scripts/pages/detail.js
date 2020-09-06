const Detail = {
    async render() {
        return `
        <section class="content">
            <div class="latest">
                <h1>Explore Restaurant</h1>
                <div class="list" id="tes"></div>
            </div>
        </section>
        `;
    },
   
    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};
   
export default Detail;