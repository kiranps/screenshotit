import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import ProjectIntro from '../components/ProjectIntro'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <Helmet
      title="screenshotit - webpage screenshot library using puppeteer"
      meta={[
        { name: 'description', content: 'javascript library to take screenshot of webpage using puppeteer' },
        { name: 'keywords', content: 'screenshot, screencapture, javascript, library' },
      ]}
    />
    <Header />
    <ProjectIntro />
    <Footer/>
  </div>
)

export default IndexPage
