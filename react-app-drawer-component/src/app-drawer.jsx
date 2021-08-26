import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  closeDrawer(e) {
    if (e.target.className === 'backdrop open' || e.target.className === 'drawer-items') {
      this.setState({
        drawerOpen: false
      });
    }
  }

  render() {
    let drawerContent = null;
    let backdrop = null;
    if (!this.state.drawerOpen) {
      drawerContent = 'drawer-content close';
      backdrop = 'backdrop close';

    } else {
      drawerContent = 'drawer-content open';
      backdrop = 'backdrop open';
    }
    return (
      <div>
        <i className="fas fa-bars fa-2x" onClick={this.openDrawer}></i>
        <div className={backdrop} onClick={this.closeDrawer}></div>
        <div className={drawerContent}>
          <h1 className="drawer-name">Menu</h1>
          <ul onClick={this.closeDrawer}>
            <li className="drawer-items">About</li>
            <li className="drawer-items">Get Started</li>
            <li className="drawer-items">Sign In</li>
          </ul>
        </div>
      </div>
    );
  }
}
