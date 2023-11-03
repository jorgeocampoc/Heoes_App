import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { GetHeroByName } from '../helpers/GetHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchHeroPAge = () => {
  const { id } = useParams();
  const heros = GetHeroByName(id);
  console.log(heros);
  const band = ( heros )=>{
    if( heros.length === 0 ){
      return true
    }
  }
  

  
  return (
    <>
    <div className='row  rows-cols-1  row-cols-sm-2 row-cols-md-3 g-3  mt-1 '>
        {
          band( heros )? <div className='alert alert-info w-100 p-3 animate__animated animate__fadeIn ' role='alert'>
            <h4 className="alert-heading text-center mb-3">Heroe no encontrado!</h4>
              <p className='text-center'> El heroe con el nombre ${id} no se pudo encontrar </p>
  
          </div>:
          
            heros.map( hero  =>( 
              
              <HeroCard key={hero.id} {...hero}/>
              
              ) )
            
        }
        </div>
    </>
  )
}
