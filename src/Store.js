import {createContext,useState,useEffect} from 'react'


const initialState={
  name:'',
  value:0,
  start:Date,
  end:Date
}
export const Context = createContext();



const Store = ({children}) => {
  const [state,setState] = useState(initialState)

  useEffect(() => {
    console.log(state.name)
    console.log(state.value)
    console.log(state.start)
    console.log(state.end)

  }, [state])
  
  return (
    <Context.Provider value={[state,setState]}>
    {children}
    </Context.Provider>
  )

}
export default Store 