const Input = ({type,placeholder,label, onChange}) => {
  return (
    <>
    <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    </>
  )

}
export default Input