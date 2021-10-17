
import http from "../http-common";
import IMessageData from "../types/message.type";

class MessageDataService {
  getAll() {
    return http.get("/messages");
  }

  get(id: string) {
    return http.get(`/messages/${id}`);
  }

  create(data: IMessageData) {
    return http.post("/messages", data);
  }

  update(id: any, data: IMessageData) {
    return http.put(`/messages/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/messages/${id}`);
  }

  deleteAll() {
    return http.delete(`/messages`);
  }

  findByTitle(category: string) {
    return http.get(`/messages?title=${category}`);
  }
}

export default new MessageDataService();