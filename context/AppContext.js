'use client'



import { createContext,useContext,useState } from "react"

const AppContext = createContext(null)

export function AppProvider({children}){
    const [variables,setVariables] = useState()

    return(
        <AppContext.Provider value={{variables,setVariables}}>
            {children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}