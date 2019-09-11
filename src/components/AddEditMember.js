import React, { useState, useEffect } from "react"
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin: 0.5rem;
  }
`

export default function AddEditMember(props) {
  const [newMember, setNewMember] = useState({})
  const { membersList, setMembersList, memberToEdit, editMember } = props

  useEffect(() => {
    memberToEdit && setNewMember(memberToEdit)
  }, [memberToEdit])

  const onChange = (event) => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value })
  }

  const addNewMember = () => {
    setMembersList([...membersList, newMember])
    props.history.push("/")
  }

  const editNewMember = () => {
    editMember(newMember)
    props.history.push("/")
  }

  return (
    <Style>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newMember.name}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={newMember.role}
        onChange={onChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newMember.email}
        onChange={onChange}
      />
      <br />
      {props.memberToEdit ? (
        <FA icon={faEdit} onClick={editNewMember} />
      ) : (
        <FA icon={faPlusCircle} size="2x" onClick={addNewMember} />
      )}
    </Style>
  )
}
