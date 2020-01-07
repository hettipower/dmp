import { blogActionTypes } from './blog.types';

export const setBlogPosts = blogPosts => ({
    type : blogActionTypes.SET_BLOG_POSTS,
    payload : blogPosts
});