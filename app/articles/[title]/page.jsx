import React from 'react'

async function ShowArticlePage({params}) {
  const {title} = await params;
  return (
    <div>
      <h1>Show Article Page</h1>
      <h3>{title}</h3>
    </div>
  )
}

export default ShowArticlePage