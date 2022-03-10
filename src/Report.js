import {useContext} from 'react'
import {Context} from './Store'
import './Report.css'


const Report=()=>{
  const [state] = useContext(Context)
  
  return (
    <>
      <div className="report">
        <div className="name">
        
          <h3>{state.name}</h3>
        </div>

        <div className="percentage">
          <svg>
            <circle cx="70" cy="70" r="70" style={{
              strokeDashoffset: '0',
              stroke: '#f3f3f3'
            }} ></circle>
            <circle cx="70" cy="70" r="70" style={{
              strokeDashoffset: `calc(${440 - (440 * state.value) / 100})`,
              stroke: '#FF5F15'
            }} ></circle>
          </svg>
          <div className="number" style={{
            position: 'absolute',
            top: '45%',
            left: '20%',
            width: '100%',
            height: '100%',
            fontSize: '20px',
            fontWeight: 'bold',

          }} ><span>{state.value}%</span></div>
        </div>
        <div className='date'>
          <h3>{state.start}</h3>
          <h3>{state.end}</h3>
        </div>

     </div>
    </>
  )

}
export default Report 