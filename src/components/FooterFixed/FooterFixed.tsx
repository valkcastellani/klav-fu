import React from "react";
import './FooterFixed.scss';
import { FooterFixedProps } from "./FooterFixedProps";


const FooterFixed: React.FC<FooterFixedProps> = (props) => {
    return (
        <footer className="AppFooterFixed">
            <span className="right">
                <span >Copyright  &#169; 2023 </span>
                <span className="LetraK">K</span>
                <span className="LetraL">l</span>
                <span className="LetraA">a</span>
                <span className="LetraV">v</span>
            </span>
        </footer>
    );
}

export default FooterFixed