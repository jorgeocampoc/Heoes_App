import { heroes } from '../data/Heros'



export const getHerosByPublicher = ( publisher ) => {
    
    const validPublisher = [ 'DC Comics', 'Marvel Comics' ]
    if( !validPublisher.includes( publisher )){
        throw new Error(`El ${publisher} no existe`);
    }
    return heroes.filter( heroe => heroe.publisher === publisher);
}
