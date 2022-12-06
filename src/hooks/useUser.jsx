import { createContext, useContext, useState } from "react";

const userContextDefault = {
  user: {
    name: '',
    profileImage: '',
    email: '',
  },
  setUser: () => {}
}

const UserContext = createContext(userContextDefault)

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({})

  return  <UserContext.Provider value={{user, setUser}} >
            {children}
          </UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  return context
}