import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlogItem from '../blog-item/blog-item.component';

import { selectBlogPosts } from '../../redux/blog/blog.selectors';

import './blog-container.styles.scss';

const BlogContainer = ({ blogPosts }) => (
    <div className="blogContainerWrap">
        <h6>Stay Update</h6>
        <h2>Here latest from the blog</h2>
        <div className="blogWrap">
            {
                (blogPosts) ?
                blogPosts.map( blog => <BlogItem 
                        key={blog.ID} 
                        title={blog.title} 
                        date={blog.date} 
                        featuredImage={blog.featuredImage}
                        slug={blog.slug}
                    /> )
                : ''
            }

        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    blogPosts : selectBlogPosts
});

export default connect(mapStateToProps)(BlogContainer);