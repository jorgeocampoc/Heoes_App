import { useMemo } from 'react';
import { getHerosByPublicher } from '../helpers/GetHerosByPublicher';
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

    const getHerosList =  useMemo( ()=> getHerosByPublicher( publisher ),[publisher] );

  return (
    <>
    {/* g-3 separacions entre tarjetas */}
            <div className='row  rows-cols-1  row-cols-sm-2 row-cols-md-3 g-3  mt-1 '> 
        {
            getHerosList.map( hero =>(
                   <HeroCard hero = {hero} key={hero.id}
                      {... hero}
                   />
             ) )
        }
        </div>
    </>
  )
}
