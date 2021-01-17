import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Auxiliary from '../../hoc/Auxiliary';
const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <SideDrawer />
        <div> Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);
export default layout;