import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import ProjectIntro from '../components/ProjectIntro'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="ScreenshotIt"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <ProjectIntro />
    <Footer/>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
