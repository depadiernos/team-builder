import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faEdit } from "@fortawesome/free-solid-svg-icons"
import Member from "components/Member"

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    width: 350px;
    a {
      align-self: flex-end;
      padding: 0.5rem;
    }
  }
`

export default function MembersList(props) {
  const { setMemberToEdit, membersList } = props
  return (
    <Style>
      {membersList.map((member) => (
        <Member key={member.id} details={member}>
          <Link
            to={`/edit/${member.id}`}
            onClick={() => setMemberToEdit(member)}>
            <FA icon={faEdit} />
          </Link>
        </Member>
      ))}
      <Link to="/add">
        <FA icon={faPlusCircle} size="2x" />
      </Link>
    </Style>
  )
}
