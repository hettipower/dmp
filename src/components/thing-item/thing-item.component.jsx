import React from 'react';
import { Link } from 'react-router-dom';

import './thing-item.styles.scss';

const ThingsItem = ({ title , image , description , color , links }) => (
    <div className="thingItemWrap" style={{ backgroundColor : color }} >
        <span className="imgOverlay" style={{ backgroundImage : `url(${image})` }}></span>
        <div className="contentWrap">
            <h3>{title}</h3>
            <div className="description">{description}</div>
        </div>
        <div className="linksWrap">
            <h3>{title}</h3>
            <div className="description">{description}</div>
            {
                (links) ?
                links.map( link => <Link key={link.link.title} to={link.link.url}>- {link.link.title}</Link> )
                : ''
            }
        </div>
    </div>
);

export default ThingsItem;