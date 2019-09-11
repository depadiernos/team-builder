import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaPlusCircle } from "react-icons/fa"
import Member from "components/Member"

export default function(props) {
  return (
    <>
      {props.membersList.map((member) => (
        <Member key={member.id} details={member} />
      ))}
      <Link to="/add">
        <FaPlusCircle />
      </Link>
    </>
  )
}
