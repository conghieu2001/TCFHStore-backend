import createApiClient from "./api.service";

class AdminService {
    constructor(baseUrl = "http://localhost:3000/admin") {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }
}

export default new AdminService();