import createApiClient from "./api.service";

class ItemService {
    constructor(baseUrl = "http://localhost:3000/api/items") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/ItemDetail/${id}`)).data;
    }
    async getItemBest() {
        return (await this.api.get("/bestsale")).data;
    }
    async update(id, data) {
        return (await this.api.put(`/ItemDetail/${id}`, data)).data;
    }  
    async delete(id) {
        return (await this.api.delete(`/ItemDetail/${id}`)).data;
    }
    async getAllTrash() {
        return (await this.api.get("/deleted")).data;
    } 
    async restore(id, data) {
        return (await this.api.put(`/restore/${id}`, data)).data;
    }  
    async getItemByLoai(data) {
        return (await this.api.post("/loaiItem", data)).data;
    } 
    async getAllItemByCoffee() {
        return (await this.api.get("/loai/coffee")).data;
    }
    async getAllItemByHitea() {
        return (await this.api.get("/loai/hitea")).data;
    }
    async getAllItemByTea() {
        return (await this.api.get("/loai/tea")).data;
    }
    async getItemByName(data) {
        return (await this.api.get(`/find/byname/${data}`)).data;
    }
    async updateFavorite(id) {
        return (await this.api.put(`/favorite/aaaaa/${id}`)).data;
    }
    async getFavorite() {
        return (await this.api.get("/favorite")).data;
    }
        
}

export default new ItemService();