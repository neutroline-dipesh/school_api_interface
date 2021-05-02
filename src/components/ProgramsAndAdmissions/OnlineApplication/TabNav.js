import React, { Component } from 'react';
import './TabNav.css';

class TabNav extends Component {
    render() {
        return (
            <div className="TabNav">
                    <ul className="nav nav-tabs custom-tab">
                        {
                            this.props.tabs.map(tab => {
                                const active = (tab === this.props.selected ? 'active ' : '');
                                return (
                                    <li className="nav-item" key={tab}>
                                        <a className={"nav-link custom-nav-link " + active} onClick={() => this.props.setSelected(tab)}>
                                            {tab}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {this.props.children}
            </div>
        )
    }
}
export default TabNav;
