import { request } from "./httpRequest";


export const productsServices = {
    get: (limit=10) => request({method: "get", url: `products?_limit=${limit}`}),
    getSingleId: (id) => request({method: "get", url: `products/${id}`}),
    post: (data) => request({method: "post", url: "products", data}),
    delete: (id) => request({method: "delete", url: `products/${id}`}),
    update: (data, id) => request({method: "put",url: `products/${id}`, data})
}