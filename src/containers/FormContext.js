import React, { useState } from 'react'

const FormContext = React.createContext()

const FormProvider = ({ children }) => {
  // Context state
  const [form, setForm] = useState({
    bacanHost: true,
    warnHost: false,
  })

  // Method to update state
  const setInput = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setForm(prevState => ({
      ...prevState,
      [name]: value
    })
    )
  }

  return (
    <FormContext.Provider
      value={{
        form,
        setInput,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext

export { FormProvider }
