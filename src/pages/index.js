import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import ProjectIntro from '../components/ProjectIntro'
import Footer from '../components/Footer'

const IndexPage = () => (
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
  </div>
)

export default IndexPage
