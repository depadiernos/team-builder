import React from "react"
import styled from "styled-components"

const Member = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  max-width: 400px;
  margin: 1rem;
  h2 {
    border-bottom: 1px solid black;
    margin: 0.5rem;
  }
  h5 {
    margin: 0.5rem;
  }
`


export default function(props) {
  return (
    <Member>
      <h2>{props.details.name}</h2>
      <h5>Role: {props.details.role}</h5>
      <h5>Email: {props.details.email}</h5>
    </Member>
  )
}
