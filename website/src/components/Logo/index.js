import React from 'react'
import styled from 'styled-components'
import photo from './shutter.svg'

const Logo = styled.img.attrs({ src: photo })`
  padding: 1em 0;
  width: ${props => props.size || "50px"};
  margin-bottom: unset;
`

const Box = styled.div`
  display: inline-block;
  padding: 0;
`

export default ({size}) => (
  <Box>
    <Logo size={size} />
  </Box>
)
