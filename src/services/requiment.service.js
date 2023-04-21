import createApiClient from "./api.service";

class PostService {
    constructor(baseUrl = "http://localhost:3000/tuyendung") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }  
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
        
}

export default new PostService();