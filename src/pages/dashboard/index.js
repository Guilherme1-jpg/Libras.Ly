import React, { useState, useEffect } from 'react'
import Footer from '../../components/assist/footer'
import SidebarContent from '../../components/sidebarContent'
import ContentAreaContent from '../../components/contentAreaModule'

export const Dashboard = () => {
  return (
    <>
      <SidebarContent />
      <ContentAreaContent />
      <Footer />
    </>
  )
}
