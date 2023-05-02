import createApiClient from "./api.service";

class PayService {
    constructor(baseUrl = "http://localhost:3000/pay") {
        this.api = createApiClient(baseUrl);
    }
    async getAllOrder(email) {
        return (await this.api.get(`/${email}`)).data;
    }
    async createOrder(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteOrder(data) {
        return (await this.api.post("/cancleOrder",data)).data;
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async updateStatus(id) {
        return (await this.api.put(`/update/${id}`)).data;
    }
    async backStatus(id) {
        return (await this.api.put(`/backStatus/${id}`)).data;
    }
    async getDoanhThu() {
        return (await this.api.get("/doanhthu/thang")).data;
    }
        
}

export default new PayService();