import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import MembersList from "components/MembersList"
import AddEditMember from "components/AddEditMember"

const initialTeam = [
  { name: "Dennis", id: 0, role: "developer", email: "dennis@something.else" },
  { name: "Melvin", id: 1, role: "developer", email: "melvin@something.else" },
  { name: "Gerald", id: 2, role: "developer", email: "gerald@something.else" },
  { name: "Malcolm", id: 3, role: "developer", email: "malcolm@something.else" }
]

export default function App(props) {
  const [membersList, setMembersList] = useState(initialTeam)
  const [memberToEdit, setMemberToEdit] = useState()

  const editMember = (editedMember) => {
    console.log(editedMember)
      const newMembersList = []
      membersList.forEach((member) => {
        console.log(member)
        if (editedMember.id === member.id) {return (newMembersList[member.id] = editedMember)}
        else{
          newMembersList[member.id]=member
        }
      })
      setMembersList(newMembersList)
  }

  return (
    <div className="App">
      <Route
        path="/"
        exact
        render={(props) => (
          <MembersList
            {...props}
            setMemberToEdit={setMemberToEdit}
            membersList={membersList}
            setMembersList={setMembersList}
          />
        )}
      />
      <Route
        path="/add"
        render={(props) => (
          <AddEditMember
            {...props}
            membersList={membersList}
            setMembersList={setMembersList}
          />
        )}
      />
      <Route
        path="/edit/:id"
        render={(props) => (
          <AddEditMember
            {...props}
            memberToEdit={memberToEdit}
            editMember={editMember}
            membersList={membersList}
            setMembersList={setMembersList}
          />
        )}
      />
      <Redirect to="/" />
    </div>
  )
}
