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
    height: 50px;
    width: 100px;
`};

`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  
`

const Greeting = styled.div`
  color: #0066ff;
  font-weight: bold;
  font-size: xx-large
`

const ClientWindow = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: #0066ff;
  border-radius: 10px;
  padding: 10px
`

export { Button, Greeting, NavBar, ClientWindow };