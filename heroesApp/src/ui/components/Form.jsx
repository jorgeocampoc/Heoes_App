import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const FormSerach = ( {handleForm} ) => {
    const [form, setForm] = useState('');
    const handleSearch = ( e ) =>{
        e.preventDefault();
        handleForm(form)
    }
  

  return (
    <form className="d-flex costom-flex justify-content-end  "  role="search" onSubmit={handleSearch}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Buscar personaje"
      aria-label="Search"
      onChange={ e => { setForm(e.target.value) } }
    />
    <Link to={`/searchHeroPAge/${form}`} className="btn btn-secondary disabledCursor" style={{pointerEvents:  form !== '' ? '' : 'none'}}  >
                  Buscar
    </Link>

  </form>
  )
}