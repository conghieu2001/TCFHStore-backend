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
        return (await this.api.get(`/${id}`)).data;
    }
    async getItemBest() {
        return (await this.api.get("/bestsale")).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }  
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async getAllTrash() {
        return (await this.api.get("/deleted")).data;
    } 
    async restore(id, data) {
        return (await this.api.put(`/restore/${id}`, data)).data;
    }   
        
}

export default new ItemService();