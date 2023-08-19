import React from "react";
import Header from "../components/Header";
import i18next from "i18next";
import { Row, Col } from "react-bootstrap";
import InputPage from "../pages/InputPage/InputPage";
import Footer from "../components/Footer";
import HomeSite from "../components/HomeSite";
import Container from "../shared/Container";

const HomeView = () => {
    return (
        <>
            <Header title={i18next.t('app-titulo')} />
            <Container>
                <Row>
                    <Col>
                        <HomeSite />
                    </Col>
                    <Col>
                        <InputPage />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default HomeView