import React from 'react';

import BlogItem from '../blog-item/blog-item.component';

import './blog-container.styles.scss';

const BlogContainer = () => (
    <div className="blogContainerWrap">
        <h6>Stay Update</h6>
        <h2>Here latest from the blog</h2>
        <div className="blogWrap">

            <BlogItem/>

        </div>
    </div>
);

export default BlogContainer;