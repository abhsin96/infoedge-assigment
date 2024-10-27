import apiInstance from "../services/api";

export default {
  getPost(payload) {
    return apiInstance.get(`/posts`).then((response) => {
      return response.data;
    });
  },
  getBlogDetails({ id }) {
    return apiInstance.get(`/posts/${id}`).then((response) => response.data);
  },
  getBlogComments({ id }) {
    return apiInstance
      .get(`/posts/${id}/comments`)
      .then((response) => response.data);
  },
};
