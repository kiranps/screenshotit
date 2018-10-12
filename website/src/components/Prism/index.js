import React, { Component } from 'react'
import styled from 'styled-components'
import prism from "prismjs"

const PRE = styled.pre`
  margin: 0;
  padding: 14px;
`

const CODE = styled.code`
   font-size: 14px;
`

export default class Prism extends Component {
  componentDidMount() {
    prism.highlightAll();
  }

  render() {
    const {children, language} = this.props
    return (
      <PRE>
        <CODE className={`language-${language}`}> 
         {children}
        </CODE>
      </PRE>
    )
  }
}
