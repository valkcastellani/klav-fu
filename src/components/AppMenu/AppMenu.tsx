import React from 'react';
import './AppMenu.scss'

import { Menu } from 'primereact/menu';

const AppMenu = () => {
    let items = [
        {label: 'New', icon: 'pi pi-fw pi-plus', command: () => { alert ("click me")}},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ];

    return (
        <Menu model={items} className="AppMenu" />
    )
}
export default AppMenu