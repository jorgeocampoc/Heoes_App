import { NavBar } from '../../ui/components/index'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dc, Marvel, HeroPage,SearchHeroPAge } from '../pages'


export const HerosRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className='container'>
                <Routes>
                <Route path="marvel" element={<Marvel />}></Route>
                <Route path="dc" element={<Dc />}></Route>
                <Route path="hero/:id" element={<HeroPage />}></Route>
                <Route path="searchHeroPAge/:id" element={<SearchHeroPAge />}></Route>
                <Route path="/" element={<Navigate to={"marvel"} />}></Route>
            </Routes>    
        </div>
    </>
  )
}
