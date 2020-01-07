import { createSelector } from 'reselect';

const selectBlogAPI = state => state.blog;

export const selectBlogPosts = createSelector(
    [selectBlogAPI],
    (blog) => blog.blogPosts
);
