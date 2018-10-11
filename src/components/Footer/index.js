import React from 'react'
import styled from 'styled-components'


const Footer = styled.footer`
  padding-bottom: 10px;
  width: 100%;
  position:absolute;
  bottom:0;
  text-align: center;
  font-size: 13px;
  color: rgba(51, 51, 51, 0.2);
`

export default ({size}) => (
  <Footer>
    Copyright © 2018 Kiran PS - Licensed under MIT.
  </Footer>
)
