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
    // async getByIdpd(id) {
    //     return (await this.api.get(`/findByIdpd/ + ${id}`)).data;
    // }
    // async login(data) {
    //     return (await this.api.post("/login", data)).data;
    // }
    // async update(id, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }
    // async getByEmail(data) {
    //     return (await this.api.get(`/findbyemail/${id}`)).data;
    // }
    // async getUserById(id) {
    //     return (await this.api.get(`/${id}`)).data;
    // }
        
}

export default new CmtService();