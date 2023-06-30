import createApiClient from "./api.service";

class CmtService {
    constructor(baseUrl = "http://localhost:3000/cmt") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async getByIdpd() {
        return (await this.api.get(`/comments`)).data;
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async deleteCmt(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
        
}

export default new CmtService();