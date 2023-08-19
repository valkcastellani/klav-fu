import React from "react";

import './Footer.scss';
import { FooterProps } from "./FooterProps";
import { Row, Col } from "react-bootstrap";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { Link } from "react-router-dom";
import i18next from "i18next";


const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer className="AppFooter">
            <div>
                <Row>
                    <Col>
                        <Row>
                            <div className="center">
                                <Link to="/cadastre-se">{i18next.t('cadastre-se')}</Link>
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                            <Link to="/termos-de-uso">{i18next.t('termos-de-uso')}</Link>
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                            <Link to="/politica-de-privacidade">{i18next.t('politica-de-privacidade')}</Link>
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                            <Link to="/licenca">{i18next.t('licenca')}</Link>
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                            <Link to="/notas-da-versao">{i18next.t('notas-da-versao')}</Link>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="center">
                                <span >Copyright  &#169; 2023 </span>
                                <span className="LetraK">K</span>
                                <span className="LetraL">l</span>
                                <span className="LetraA">a</span>
                                <span className="LetraV">v</span>
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                                {i18next.t('todos-os-direitos-reservados')}
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                                Volta Redonda
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                                Rio de Janeiro
                            </div>
                        </Row>
                        <Row>
                            <div className="center">
                                Brasil
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div className="center">
                            <SocialMediaIcons />
                        </div>
                    </Col>
                </Row>
            </div>
        </footer >
    );
}

export default Footer