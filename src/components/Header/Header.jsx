import React, {Component} from 'react'
import './Header.css'
import { Menu, Dropdown, Icon } from 'antd';

class HeaderComponent extends Component {
    menuItems = [];
    profile = {
    };
    constructor(props) {
        super(props);
        this.menuItems = [
            {
                title: 'Your Account'
            },
            {
                title: 'Invest'
            },
            {
                title: 'Resources'
            }
        ];

        this.profile = {
            username: 'Joseph'
        }
    }
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">3rd menu item</a>
              </Menu.Item>
            </Menu>
          );
        return (<div className="header-wrapper">
                    <div className="container">
                        <div className="menu-items-wrapper">
                        {
                            this.menuItems.map(item => {
                                return (
                                    <div className="menu-item-wrapper" key={item.title}>
                                        <Dropdown overlay={menu}>
                                            <a className="ant-dropdown-link" href="#">
                                                {item.title} <Icon type="down" />
                                            </a>
                                        </Dropdown>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <div className="notifications-wrapper">
                                <Icon type="bell" />
                            </div>
                            <div className="user-profile-wrapper">
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href="#">
                                        {this.profile.username} <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
		</div>)
    }
}

export default HeaderComponent