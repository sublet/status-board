import React, { useState, createContext } from 'react'

export const ProjectContext = createContext()

export const ProjectProvider = (props) => {
  const contextError = useState(null);

  const params = { contextError }

  return (
    <ProjectContext.Provider value = {params}>
      {props.children}
    </ProjectContext.Provider>
  )
}
