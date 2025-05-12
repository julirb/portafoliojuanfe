import { Routes,Route } from 'react-router-dom'

import{Home} from "../../pages/Home/Home"
import{Introduccion}from "../../pages/Introduccion/Introduccion"

export function Rutas(){
    return(
        <>

            <Routes>
                <Route path='/inicio' element={<Home/>}></Route>
                <Route path='/proyectos' element={<Introduccion/>}></Route>
            </Routes>
        </>
    )
}

