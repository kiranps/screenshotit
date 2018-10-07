import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Link from 'gatsby-link'

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
  @media screen and (min-width: 53.75em) {
    display: inline;
    margin: 0;
    padding: 0;
  }

  -webkit-transform-style: preserve-3d;
  clear: both;
  display: none;
  margin: 0 auto;
  overflow: visible;
  padding: 0;
  width: 100%;
  z-index: 9999;
  list-style-type: none;
`

const LI = styled.li`
  @media screen and (min-width: 53.75em) {
    background: transparent;
    display: inline;
    line-height: 80px;
    text-decoration: none;
    width: auto;
    padding-right: 30px;
  }

  > a {
    color: rgba(0, 0, 0, 0.7);
    display: inline-block;
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
              <Link to="/">Home</Link>
            </LI>
            <LI>
              <Link to="https://github.com/kiranps/screenshotit">Documentation</Link>
            </LI>
            <LI>
              <Link to="https://github.com/kiranps/screenshotit">Fork on Github →</Link>
            </LI>
          </UL>
        </Nav>
      </NavContent>
    </NavWrapper>
  </Header>
)
