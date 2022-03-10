import { NavLink} from 'react-router-dom'
import './Header.css'
const Header =()=>{
  return (
    <div className='header'>
   
      <ul>
        <li>
          <NavLink to='/plan'>Plan</NavLink></li>
        <li> <NavLink to='/report'>Report</NavLink></li>
      </ul>
  
    </div>
  )

}
export default Header