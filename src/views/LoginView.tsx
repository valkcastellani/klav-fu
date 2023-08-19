import React from 'react'
import LoginForm from '../components/Authentication/LoginForm'
import Header from '../components/Header'
import FooterFixed from '../components/FooterFixed'
import i18next from 'i18next'

const LoginView = () => {
  return (
    <>
      <Header title={i18next.t('app-titulo')} />
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ minWidth: 320 }}>
          <LoginForm />
        </div>
      </div>
      <FooterFixed />
    </>
  )
}

export default LoginView
