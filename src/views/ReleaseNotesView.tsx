
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../shared/Container';
import i18next from 'i18next';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

declare interface TimelineEvent {
    status?: string;
    date?: string;
    icon: IconDefinition;
    color?: string;
    image?: string;
    name?: string;
    text?: string;
    url?: string;
}

const ReleaseNotesView = () => {
    const events: TimelineEvent | any[] = [
        // { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        // { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        // { status: 'Shipped', date: '15/10/2020 16:15', icon: faBoltLightning, color: '#607D8B' },
        { status: i18next.t('o-inicio'), date: '23/06/2023', icon: faLightbulb, text: i18next.t('texto-o-inicio'), color: '#FF9800' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className='flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1'
                style={{ minWidth: '30px', alignContent: 'center' }} >
                <center>
                    <FontAwesomeIcon style={{ color: item.color, margin: '5px' }} icon={item.icon} size='2xl' />
                </center>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
                <p>{item.text}</p>
                {item.url && <Button label="Read more" className="p-button-text"></Button>}
            </Card>
        );
    };

    return (
        <>
            <Header title={i18next.t('app-titulo')} />
            <Container style={{minHeight: '57vh'}}>
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </Container>
            <Footer />
        </>
    )
}

export default ReleaseNotesView