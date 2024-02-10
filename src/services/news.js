import { request } from "./httpRequest";


export const newsServices = {
    get: (limit=10) => request({method: "get", url: `news?_limit=${limit}`}),
    getSingleId: (id) => request({method: "get", url: `news/${id}`}),
    post: (data) => request({method: "post", url: "news", data}),
    delete: (id) => request({method: "delete", url: `news/${id}`}),
    update: (data, id) => request({method: "put",url: `news/${id}`, data})
}