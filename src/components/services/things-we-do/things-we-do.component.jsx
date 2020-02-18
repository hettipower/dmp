import React from 'react';

import './things-we-do.styles.scss';

const ThingsWeDo = ({ things }) => (
    <div className="thingsWeDoWrap">
        <p><strong>We are different from other</strong></p>
        <h2>Things that make us better</h2>
        <div className="thingsWrap">
            {
                (things && things.length > 0) ?
                things.map( (thing , idx) => 
                    <div key={idx} className="thingItem">
                        <div className="img">
                            {
                                (thing.image) ?
                                <img src={thing.image} alt={thing.title}/>
                                : ''
                            }
                        </div>
                        <h3>{thing.title}</h3>
                        <div className="content">{thing.content}</div>
                    </div> 
                )
                : ''
            }
        </div>
    </div>
);

export default ThingsWeDo;