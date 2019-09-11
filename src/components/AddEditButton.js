import React from "react"
import styled from 'styled-components'

const Button = styled.button`
  ${props => (!props.edit) && `position: fixed;`}
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 10px;

`

export default function(props){
  console.log(props)
  return(
    <Button>+</Button>
  )
}