import { blogActionTypes } from './blog.types';

const INITIAL_STATE = {
    blogPosts : null,
}

const blogReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case blogActionTypes.SET_BLOG_POSTS:
            return{
                ...state,
                blogPosts : action.payload
            }
        default:
            return state;
    }
}

export default blogReducer;