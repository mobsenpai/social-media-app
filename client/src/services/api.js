import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8800/api";

const api = axios.create({
  baseURL: apiUrl,
  // This is already setup by axios but its good to be explicit
  headers: { "Content-type": "application/json" },
});

// Timeline endpoints
export const getTimeline = (userId) => {
  return api.get("/posts/timeline/all", { params: { userId } });
  // NOTE: here
  // params: {userId: userId}
  // is simplified to just params: {userId}
  // both mean the same thing
};

// User endpoints
export const getUser = (userId) => {
  return api.get(`/users/${userId}`);
};

// Post endpoints
export const createPost = (postData) => {
  return api.post("/posts", postData);
};

export const likePost = (postId, userId) => {
  return api.put(`/posts/${postId}/like`, { userId });
  // NOTE: in a post request
  // we can send a body,
  // hence this userId is sent as a body
  // and can be accessed in backend as req.body.ANYTHING
  // but not in case of get request hence we used params to send it as a query string
};

export const login = (credientials) => {
  return api.post("/auth/login", credientials);
};

export const register = (userData) => {
  return api.post("/auth/register", userData);
};
