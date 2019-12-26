import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectThings } from '../../redux/home/home.selectors';

import ThingsItem from '../thing-item/thing-item.component';

import './things.styles.scss';

const Things = ({ things }) => (
    <div className="thingsWrap">
        <div className="titleWrap">
            <p>We help you to be seen</p>
            <h2>Things we are good at</h2>
        </div>
        <div className="things d-flex flex-wrap justify-content-between">

            {
                (things)?
                things.map( thing => <ThingsItem 
                    key={thing.title} 
                    title={thing.title} 
                    image={thing.image} 
                    description={thing.description}
                    color={thing.color}
                    links={thing.links}
                    /> )
                : ''
            }

        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    things : selectThings,
});

export default connect(mapStateToProps)(Things);