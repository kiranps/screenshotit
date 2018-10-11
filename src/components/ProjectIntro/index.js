import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Prism from "prismjs"

const CODE_SHELL = `npm install screenshotit`

const CODE_JS = 
`html2canvas(document.querySelector("#capture")).then(canvas => {
  document.body.appendChild(canvas)
});`

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
  margin: 20px 0  0 10px;
`

const CodeBox = styled.div`
 > pre {
  margin: 0;
  padding: 14px;
 }

 > pre > code {
   font-size: 14px;
 }
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
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <ProjectIntro>
        <Logo size="200px" />
        <ProjectTitle>ScreenshotIt</ProjectTitle>
        <ProjectDescription>Take screenshot of current webpage</ProjectDescription>
        <Label>INSTALL</Label>
        <CodeBox>
          <pre>
            <code className="language-"> 
             {CODE_SHELL}
           </code>
          </pre>
        </CodeBox>
        <Label>EXAMPLE</Label>
        <CodeBox>
          <pre>
            <code className="language-javascript"> 
             {CODE_JS}
           </code>
          </pre>
        </CodeBox>
      </ProjectIntro>
    )
  }
}

