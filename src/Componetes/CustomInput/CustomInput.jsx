import  { useState } from 'react'
import PropTypes from 'prop-types'

function CustomInput({ id, placeholder, style, className }) {

  let [value, setValue] = useState('');

  return (
     <input id={id} className={`${className}`} type="text" style={style} placeholder={placeholder} value={value} onChange={(e)=> setValue(e.target.value) } />
  )
}

CustomInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

CustomInput.defaultProps = {
  id: '1',
  placeholder: 'Buscar...',
  style: { },
  className: "flex w-72 flex-col items-end gap-6"
}


export default CustomInput

