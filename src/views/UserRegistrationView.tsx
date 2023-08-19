import React from 'react'
import Header from '../components/Header'
import FooterFixed from '../components/FooterFixed'
import i18next from 'i18next'
import UserRegistrationForm from '../components/User'
import Container from '../shared/Container'

const UserRegistrationView = () => {
    return (
        <>
            <Header title={i18next.t('app-titulo')} />
            <Container>
            <UserRegistrationForm />
                    </Container>
            <FooterFixed />
        </>
    )
}

export default UserRegistrationView