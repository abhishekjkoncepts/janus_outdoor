import types from "../types";

const initialstate = {
  Blogs: null,
  SingleBlog: null,
};

export const BlogReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_BLOG:
      const blogs = action.payload;
      return {
        ...state,
        Blogs: blogs,
      };
    case types.GET_BLOG_BY_ID:
      const blogsById = action.payload;
      return {
        ...state,
        SingleBlog: blogsById,
      };
    default:
      return state;
  }
};
