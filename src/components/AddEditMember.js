import React, { useState } from "react"
import MembersList from "./MembersList"

export default function(props) {
  const [newMember, setNewMember] = useState({})
  const {membersList, setMembersList} = props

  const onChange = (event) => {
    setNewMember({...newMember, [event.target.name]: event.target.value})
  }

  const addNewMember = () => {
    setMembersList([...membersList, newMember])
    props.history.push('/')
  }

  return (
    <div>
      <input type="text" name="name" placeholder="Name" value={newMember.name} onChange={onChange}/><br/>
      <input type="text" name="role" placeholder="role" value={newMember.role} onChange={onChange}/><br/>
      <input type="email" name="email" placeholder="email" value={newMember.email} onChange={onChange}/><br/>
      <button onClick={addNewMember}>Add</button>
    </div>
  )
}
