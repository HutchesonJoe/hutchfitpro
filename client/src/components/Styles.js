import styled, { css } from 'styled-components'

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;

${props=>
  props.navbar &&
  css`
    font-weight: bolder;
`};
`

const Greeting = styled.div`
  color: blue;
  font-weight: bold;
  font-size: xx-large
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  
`

export { Button, Greeting, NavBar };