import React from 'react';
import { Link } from 'react-router-dom';

import './blog-item.styles.scss';

const BlogItem = ({ title , date , featuredImage , slug }) => (
    <div className="blogItem">
        <Link to={`/blog/${slug}`} />
        <div className="date">{date}</div>
        <h3>{title}</h3>
        <div className="imgWrap" style={{ backgroundImage : `url(${featuredImage})` }} />
    </div>
);

export default BlogItem;