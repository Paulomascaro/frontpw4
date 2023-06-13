import NovaMensagem from "./NovaMensagem";
import {ListarMensagem} from "./ListarMensagem";

export default function Home() {
    const nome = localStorage.getItem("nome");

    return (
        <div>
            {nome ? <h1 className="text-center text-4xl text-blue-950">Bem vindo {nome}</h1> : <h1 className="text-center text-4xl text-blue-950">Bem vindo</h1>}
            <NovaMensagem />
            <ListarMensagem />
        </div>
    )
}