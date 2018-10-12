import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { Link } from 'gatsby'

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  height: 80px;
  width: 100%;
  z-index: 999;
`

const Nav = styled.div`
  @media screen and (min-width: 53.75em) {
    display: inline-block;
    vertical-align: top;
    margin-left: 30px;
  }
`

const NavContent = styled.div`
  margin-left: 8.5298%;
  float: left;
  display: block;
  margin-right: 2.35765%;
  width: 82.94039%;
`

const NavWrapper = styled.div`
  max-width: 68em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 9999;
`

const UL = styled.div`
  display: inline;
  margin: 0;
  padding: 0;
`

const LI = styled.li`
  background: transparent;
  display: inline;
  line-height: 80px;
  text-decoration: none;
  width: auto;
  padding-right: 30px;

  > a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    display: inline-block;
    cursor: pointer;
  }
`

export default () => (
  <Header>
    <NavWrapper>
      <NavContent>
        <Logo />
        <Nav>
          <UL>
            <LI>
              <a href="/">Home</a>
            </LI>
            <LI>
              <a href="https://github.com/kiranps/screenshotit" target="_blank">Documentation</a>
            </LI>
            <LI>
              <a href="https://github.com/kiranps/screenshotit" target="_blank">Fork on Github →</a>
            </LI>
          </UL>
        </Nav>
      </NavContent>
    </NavWrapper>
  </Header>
)
