import React, { useState } from 'react'

const FormContext = React.createContext()

const FormProvider = ({ children }) => {
  // Context state
  const [form, setForm] = useState({
    bacanHost: true,
    warnHost: false,
    files: {
      imageProfile: {
        previewVisible: false,
        previewImage: '',
        fileList: []
      },
      banners: {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
      }
    }
  })

  // Method to update state
  const setInput = (e) => {
    const { name, value } = e.target
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
        setForm
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext

export { FormProvider }
