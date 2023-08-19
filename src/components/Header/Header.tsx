import React, { useState } from 'react';

import { Sidebar } from 'primereact/sidebar';
import "primereact/resources/primereact.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import { HeaderProps } from "./HeaderProps";

import Logo from "../Logo";
import AppMenu from '../AppMenu';
// import UserMenu from '../UserMenu';

const Header: React.FC<HeaderProps> = (props) => {
    const [visibleMenu, setVisibleMenu] = useState(false);

    return (
        <header className="AppHeader">
            <div className="left"><Logo /></div>

            <span className="center">
                <h1 className="Title">{props.title}</h1>
            </span>

            <div className="user-profile">
                {/* <UserMenu /> */}
                <div className="icon-bars" onClick={() => setVisibleMenu(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <Sidebar visible={visibleMenu} position="right" onHide={() => setVisibleMenu(false)} className="background-color" >
                <AppMenu />
            </Sidebar>
        </header>
    );
}

export default Header