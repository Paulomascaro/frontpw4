import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./componentes/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/Login";
import NovaMensagem from "./componentes/NovaMensagem";
import {EditarUser} from "./componentes/EditarUser";
// import {ListarMensagem} from "./componentes/ListarMensagem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "home", element: <Home />},
            {path: "cadastro", element: <Cadastro />},
            {path: "login", element: <Login />},
            {path: "novamensagem", element: <NovaMensagem />},
            {path: "editar", element: <EditarUser />}
            // {path: "listarmensagem", element: <ListarMensagem />}
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);


reportWebVitals();
