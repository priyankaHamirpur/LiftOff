import Input from './Input'
import './Plan.css'
import {useState,useContext,useEffect} from 'react'
 import {Context} from './Store'
// import DatePicker from 'react-date-picker';




const Plan = () => {
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
const [valueErr, setValErr] = useState(false)
const [dateErr, setDateErr] = useState(false)
const [state, setState] = useContext(Context)


  const getInfo=()=>{
    setState({name,value,startDate,endDate})
   

  }

const getName=(e)=>{
    setName(e.target.value)

  }
  const getValue = (e) => {
    let val = e.target.value
    if(val<1 || val>100){
      setValErr(true)
    }
    else{
      setValErr(false)
    }
    setValue(e.target.value)

  }
  const getStartDate = (e) => {
     setStartDate(e.target.value)
     if (endDate > startDate) {
       setDateErr(true)
     }
     else {
       setDateErr(false)
     }
  
    // setStartDate(e.target.value.toLocaleString())
  }
  const getEndDate = (e) => {
    setEndDate(e.target.value)
    if(endDate>startDate){
      setDateErr(true)
    }
    else{
      setDateErr(false)
    }
    // setEndDate(e.target.value.toLocaleString())

  }
  useEffect( ()=>{
    console.log(startDate)
console.log(endDate)
  },[startDate,endDate])

  return (
    <div className='plan-container'>
      <div className='plan-tab'>
        <h1>Enter Your Plan</h1>
        <Input type='text' placeholder='Enter Name' label='Name' onChange={getName} value={name}/>
        <Input type='number' placeholder='Enter Value' label='Value' onChange={getValue} value={value} />
        {valueErr ? <span>Enter Valid Number</span> : ""}
      
        <input type='date' onChange={getStartDate} />
        <input type='date' onChange={getEndDate} />
        {dateErr ? <span>Enter Correct Date</span> : ""}
<button onClick={getInfo}>Get Info</button>
      </div>
    </div>
   
  )

}
export default Plan