import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
class Layout extends Component{

    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });            
    }

    render() {
        return (
    <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        closed ={this.sideDrawerClosedHandler} />
        <div> Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxiliary>
)
}
}
export default Layout;