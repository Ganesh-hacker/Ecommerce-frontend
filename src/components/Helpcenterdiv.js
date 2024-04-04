import React from 'react'
import { Link } from 'react-router-dom'
export default function Helpcenterdiv(props) {
  console.log(props)
  return (
    <div>
    <Link to={`/helpcenterdescription?id=${props.id}`}> <p style={{fontSize:'22px',fontWeight:'bolder', textDecoration:'underline' ,color:'black'}}>{props.heading}</p></Link>
     <p style={{color:'#595959',letterSpacing:'normal',cursor:'pointer'}}>{props.breif}</p>
    </div>
  )
}
