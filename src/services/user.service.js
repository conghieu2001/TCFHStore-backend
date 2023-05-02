import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "http://localhost:3000/user") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async getByEmail(data) {
        return (await this.api.get(`/findbyemail/${id}`)).data;
    }
    async getUserById(id) {
        return (await this.api.get(`/${id}`)).data;
    }
        
}

export default new UserService();