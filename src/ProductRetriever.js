
export default class ProductRetriever {
    static getProducts () {
        return fetch("http://blue.test:8000/api/products/0/25").then(res => res.json());
    }
    static getProductsPaginated(page, amount) {
        return fetch(process.env.REACT_APP_BACKEND_URL + `/api/products/${page}/${amount}`).then(res => res.json());
    }
    static getProductCount() {
        return fetch(process.env.REACT_APP_BACKEND_URL + '/api/products/count').then(res => res.json());
    }
}