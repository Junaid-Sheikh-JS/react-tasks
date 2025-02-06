import React from 'react'
import Greet from './Components/Greet.jsx'
import Book from './Components/Book.jsx'
import UserCard from './Components/UserCard.jsx'
import ToggleColor from './Components/ToggleColor.jsx'
import TogglePara from './Components/TogglePara.jsx'
import List from './Components/List.jsx'
import Form from './Components/Form.jsx'
import FetchApi from './Components/FetchApi.jsx'
import Todo from './Components/Todo/Todo.jsx'
import UseReducer from './Components/UseReducer.jsx'

const App = () => {
  return (
    <>
      <Greet />
      <Book />
      <UserCard name="Jerry" email="g8C9t@example.com" age="20" />
      <ToggleColor />
      <TogglePara />
      <List />
      <Form />
      <FetchApi />
      <Todo />
      <UseReducer/>
    </>
  )
}

export default App;
