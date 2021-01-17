import React from 'react';
import classes from './BuildControls.module.css';
import BuilControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type : 'salad'},
    { label: 'Bacon', type : 'bacon'},
    { label: 'Cheese', type : 'cheese'},
    { label: 'Meat', type : 'meat'}
];
const buildControls = (props) => (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong> {props.price.toFixed(2)}</strong></p>
            {controls.map(ctl => (
                <BuilControl 
                key={ctl.label} 
                label={ctl.label} 
                added={() => props.ingredientAdded(ctl.type)}
                removed={() => props.ingredientRemoved(ctl.type)}
                disabled={props.disabled[ctl.type]}
                />
            ))}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    );

export default buildControls;
