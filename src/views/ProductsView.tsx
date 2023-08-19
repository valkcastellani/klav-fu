import React from 'react'

import Header from '../components/Header'
import Container from '../shared/Container'
import ProductsCRUD from '../components/Products/ProductsCRUD'
import i18next from 'i18next'

const HomeView = () => {
  return <>
    <Header title={i18next.t('app-titulo')} />
    <Container>
      <ProductsCRUD />
    </Container>
  </>
}

export default HomeView