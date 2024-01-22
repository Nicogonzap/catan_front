import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App';


function Router () {
    return (
        <Routes>
            <Route exact path='/' element={<App/>} >
                */ 
                <Route index element={<ContentWrapper />} />
                <Route path='usuarios' element={<Usuarios/>}/>
                <Route path='products' element={<Tabla/>}/>
                <Route path='categorias' element={<Categorias/>}/>
                <Route path='products/:id' element={<ProductoDetail/>}/>
                <Route path='products/edit/:id' element={<ProductoEdit/>}/>
                <Route path='products/crear' element={<ProductoCreate/>}/>
                */
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    )
}

export default Router