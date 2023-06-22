import createApiClient from "./api.service";

class UserService2 {
    constructor(baseUrl = "http://localhost:3000/") {
        this.api = createApiClient(baseUrl);
    }


    async getAll() {
        return (await this.api.get("/")).data;
    }

        
}

export default new UserService2();