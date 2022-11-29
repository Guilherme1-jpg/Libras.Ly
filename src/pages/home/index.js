import * as React from 'react'
import * as C from './styled'
import Footer from '../../components/assist/footer'
import Navbar from '../../components/assist/navbar'
import Banner from '../../components/banner'
import Content from '../../components/content'
import VLibras from '@djpfs/react-vlibras'
const Home = () => {
  return (
    <>
      <Navbar />
      <VLibras />
      <Content />
      <Footer />
    </>
  )
}

export default Home
