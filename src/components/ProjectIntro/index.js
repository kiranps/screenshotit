import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const ProjectIntro = styled.section`
  display: block;
  text-align: center;
  margin-top: 30px;
`

const ProjectTitle = styled.h1`
  margin: 10px 0  0 10px;
`

const ProjectDescription= styled.h3`
  margin: 20px 0  0 10px;
`

export default () => (
  <ProjectIntro>
    <Logo size="200px"/>
    <ProjectTitle>ScreenshotIt</ProjectTitle>
    <ProjectDescription>Take screenshot of current webpage</ProjectDescription>
  </ProjectIntro>
)
