import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/GetHeroById';

export const HeroPage = () => {
  const { id } = useParams();
  const hero= useMemo( ()=> getHeroById( id ),[id]  );
  const { superhero,publisher,alter_ego,first_appearance,characters }  = hero;
  const imgSrc = `../../../assets/heroes/${id}.jpg`;
  const navigate = useNavigate()
  const onReturnBack = () =>{
    navigate(-1); //-1 para retornar a lo atnerior en el historial
  }
  if( !hero ){
    return <Navigate to={'/marvel'}/>
  }
  return (
    <>
      <div className='row mt-3   ms-1 bg-white me-2 position-relative animate__animated animate__fadeInLeft'>
        <div className="col-4 ps-1 "> 
          <img src={imgSrc} alt={superhero}  className='img-thumbnail  '/>
        </div>
        <div className='col-8 '>
          <h2 className='text-center m-4'>{superhero}</h2>
          <hr />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item '><b>Alter_Ego:&ensp;</b>{alter_ego}</li>
            <li className='list-group-item'><b>Publissher:&ensp;</b>{publisher}</li>
            <li className='list-group-item'><b>First_appearance:&ensp;</b>{first_appearance}</li>
          </ul>

            <h5 className='ms-3 mt-3'><b>Characters</b></h5>
            <p className='ms-3 mt-3'>{characters}</p>

          

        </div>
       <div className='text-center  custom-button'>
       <button className='btn btn-outline-primary bottom-0 mb-2 '
               onClick={onReturnBack} 
                  >
              Regresar
            </button>
       </div>
        
        
      </div>
    </>
  )
}
