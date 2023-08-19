import i18next from "i18next"
import React from "react"
import Footer from "../components/Footer";
import Container from "../shared/Container";
import Header from "../components/Header";

const LicenseView = () => {
    return (
        <>
            <Header title={i18next.t('app-titulo')} />
            <Container>
                <div className="padrao">
                    <p>{i18next.t('eula')}</p>
                    <p>{i18next.t('licenca-1')}</p>
                    <p>{i18next.t('resumo')}</p>
                    <p><ul>
                        <li>{i18next.t('licenca-2')}</li>
                        <li>{i18next.t('licenca-3')}</li>
                        <li>{i18next.t('licenca-4')}</li>
                        <li>{i18next.t('licenca-5')}</li>
                        <li>{i18next.t('licenca-6')}</li>
                    </ul></p>
                    <p>{i18next.t('o-acordo')}</p>
                    <p>{i18next.t('licenca-7')}</p>
                    <p>{i18next.t('a-licenca')}</p>
                    <p>{i18next.t('licenca-8')}</p>
                    <p>{i18next.t('as-restricoes')}</p>
                    <p><ol>
                        <li>{i18next.t('licenca-9')}</li>
                        <li>{i18next.t('licenca-10')}</li>
                        <li>{i18next.t('licenca-11')}</li>
                    </ol></p>
                    <p>{i18next.t('avisos-de-privacidade')}</p>
                    <p>{i18next.t('licenca-12')}</p>
                    <p><ol>
                        <li>{i18next.t('licenca-13')}</li>
                        <li>{i18next.t('licenca-14')}</li>
                        <li>{i18next.t('licenca-15')}</li>
                    </ol></p>
                    <p>{i18next.t('avisos-de-codigo-aberto')}</p>
                    <p>{i18next.t('licenca-16')}</p>
                    <p>{i18next.t('licenca-17')}</p>
                    <p>{i18next.t('avisos-de-propriedade-intelectual')}</p>
                    <p>{i18next.t('licenca-18')}</p>
                    <p>{i18next.t('licenca-19')}</p>
                    <p>{i18next.t('isencoes-e-limitacoes-de-responsabilidade')}</p>
                    <p>{i18next.t('licenca-20')}</p>
                    <p>{i18next.t('licenca-21')}</p>
                    <p>{i18next.t('licenca-22')}</p>
                    <p>{i18next.t('miscelanea')}</p>
                    <p><ol>
                        <li>{i18next.t('licenca-23')}</li>
                        <li>{i18next.t('licenca-24')}</li>
                        <li>{i18next.t('licenca-25')}</li>
                        <li>{i18next.t('licenca-26')}</li>
                        <li>{i18next.t('licenca-27')}</li>
                    </ol></p>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default LicenseView