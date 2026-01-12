"use client"
import React, { useEffect, useState } from 'react'

function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchTodo() {
      const respones = await fetch('https://dummyjson.com/todos/1');
      const result = await respones.json();
      setTodo(result);
    }
    fetchTodo();
  },[]);

  return (
    <div>{todo.todo}</div>
  )
}

export default Todo