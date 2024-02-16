import store from "../store";
import types from "../types";

import { apiGet } from "../../services/api";

import { GET_BLOGS } from "../../services/urls";

const { dispatch } = store;

export async function getBlogs() {
  return apiGet(GET_BLOGS).then((res) => {
    console.log("blogsresponse",res);
    dispatch({
      type: types.GET_BLOG,
      payload: res,
    });
  });
}

export async function getBlogsById(id) {
  return apiGet(`${GET_BLOGS}/${id}`).then((res) => {
    console.log('SINGLE BLOG', res);
    dispatch({
      type: types.GET_BLOG_BY_ID,
      payload: res
    });
  });
}
