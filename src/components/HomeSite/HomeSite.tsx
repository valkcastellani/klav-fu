import React from "react";
import './HomeSite.scss'
import i18next from "i18next";
const HomeSite = () => {
    return (
        <>
            <div className="AppHomeSite">
                <p>{i18next.t('bem-vindo')}</p>
                <p>{i18next.t('mensagem-1')}</p>
                <p>{i18next.t('mensagem-2')}</p>
                <p>{i18next.t('mensagem-3')}</p>
                <p>{i18next.t('mensagem-4')}</p>
                <p>{i18next.t('mensagem-5')}</p>
                <p>{i18next.t('mensagem-6')}</p>
                <p>
                    <span>{i18next.t('equipe')} </span>
                    <span className="LetraK">K</span>
                    <span className="LetraL">l</span>
                    <span className="LetraA">a</span>
                    <span className="LetraV">v</span>
                </p>
            </div>
        </>
    );
}


export default HomeSite