import { useState } from 'react';
import './Header.css';
import { FaLinkedin } from "react-icons/fa";
import { HiHome, HiSearch, HiBriefcase, HiUsers, HiChatAlt, HiBell, HiViewGrid, HiLightningBolt, HiChat } from "react-icons/hi";

import { ItemNav } from './ItemNav';
import { IconUser } from './IconUser';

export function Header(){

    const [item, setItem] = useState(null);

    const clicNavItem = (value) => {
        setItem(value);
    }

    return(
        <header id="header" className="container">
            <div className="left-content">
                <FaLinkedin size={36} color="0A66C2" />
                <div className="input-sector">
                    <HiSearch className="icon-search" size={18} color="191919" />
                    <input type="text" className="input" placeholder="Buscar"></input>
                </div>
            </div>
            <nav className="right-content">
                <ItemNav item={item} clicNavItem={clicNavItem} name="Inicio" Icon={HiHome} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Mi red" Icon={HiUsers} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Empleos" Icon={HiBriefcase} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Mensajes" Icon={HiChatAlt} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Notificaciones" Icon={HiBell} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Yo" Icon={IconUser} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Para negocios" Icon={HiViewGrid} />
                <ItemNav item={item} clicNavItem={clicNavItem} name="Publicidad" Icon={HiLightningBolt} />
            </nav>
        </header>
    );
}
// JSX === XML (VERSIÓN ANTERIOR DE HTML)