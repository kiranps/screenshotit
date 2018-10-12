import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Prism from '../Prism'

const CODE_SHELL = `npm install --save screenshotit`

const CODE_JS = 
`screenshotit(options).then(function(image) {
  // handle image
})`

const ProjectIntro = styled.section`
  display: block;
  text-align: center;
  margin-top: 30px;
  width: 580px;
  margin: 0 auto;
`

const ProjectTitle = styled.h1`
  margin: 10px 0  0 10px;
`

const ProjectDescription = styled.h3`
  font-size: 20px;
  margin: 0px 0  0 10px;
`

const Label = styled.div`
  margin: 10px 0 0 0;
  font-size: 13px;
  padding: 0;
  color: #989898;
  font-weight: normal;
  text-align: left;
`

export default class IndexPage extends Component {
  render() {
    return (
      <ProjectIntro>
        <Logo size="200px" />
        <ProjectTitle>ScreenshotIt</ProjectTitle>
        <ProjectDescription>Take screenshot of current webpage using puppeteer</ProjectDescription>
        <Label>INSTALL</Label>
        <Prism language="shell">
          {CODE_SHELL}
        </Prism>
        <Label>EXAMPLE</Label>
        <Prism language="javascript">
          {CODE_JS}
        </Prism>
        <Label>OPTIONS</Label>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>value</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>puppeter</td>
              <td>url</td>
              <td>url of puppeter service</td>
            </tr>
          </tbody>
        </table>
      </ProjectIntro>
    )
  }
}

