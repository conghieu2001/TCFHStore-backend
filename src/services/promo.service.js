import createApiClient from "./api.service";

class PromoService {
    constructor(baseUrl = "http://localhost:3000/promo") {
        this.api = createApiClient(baseUrl);
    }
    async getAll () {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async getByMGG() {
        return (await this.api.get("/magiamgia")).data;
    }
    async getByFS() {
        return (await this.api.get("/freeship")).data;
    }
    async addCode(data) {
        return (await this.api.get(`/findbyname/${data}`)).data;
    }
    async addCodeUpdate(id) {
        return (await this.api.get(`/findbynameupdate/${id}`)).data;
    }
    
        
}

export default new PromoService();