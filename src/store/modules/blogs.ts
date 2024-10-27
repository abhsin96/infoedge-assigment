import { createSlice } from "@reduxjs/toolkit";
import BlogApi from "../../api/Blog";
import { StoreInitialData } from "../../model/BlogInterface";

const initialState: StoreInitialData = {
  posts: [],
  currentPost: {},
};
const name = "blog";

const slice = createSlice({
  name,
  initialState,
  reducers: {
    SET_POSTS(state, { payload }) {
      state.posts = payload;
    },
    SET_BLOG_DETAIL(state, { payload }) {
      state.currentPost = payload;
    },
  },
});

export const { reducer } = slice;

export const actions = {
  getPosts:
    () =>
    (dispatch: any): any => {
      return BlogApi.getPost({}).then((res: any) => res);
    },

  getBlogDetails:
    ({ id }: { id: string | undefined }) =>
    (dispatch: any): any => {
      return BlogApi.getBlogDetails({ id }).then((res: any) => res);
    },
  getBlogComments:
    ({ id }: { id: string | undefined }) =>
    (dispatch: any): any => {
      return BlogApi.getBlogComments({ id }).then((res: any) => res);
    },
};

const getters = {
  getBlogs(rootState: { blog: StoreInitialData }) {
    const state = rootState[name];
    return state.posts;
  },
};

export default {
  actions,
  getters,
  slice,
};
