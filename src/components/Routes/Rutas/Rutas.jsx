import { Routes,Route } from 'react-router-dom'

import{Home} from "../../pages/Home/Home"
import{Introduccion}from "../../pages/Introduccion/Introduccion"
import { Historia } from '../../pages/Historia/Historia'
import { Experiencia } from '../../pages/Experiencias/Experiencia'


export function Rutas(){
    return(
        <>
            <Routes>
                <Route path='/inicio' element={<Home/>}></Route>
                <Route path='/Julianarodriguez' element={<Introduccion/>}></Route>
                <Route path='/proyectos' element={<Historia/>}></Route>
                <Route path='/conocimientos' element={<Experiencia/>}></Route>
            </Routes>
        </>
    )
}

