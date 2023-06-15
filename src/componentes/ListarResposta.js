import {useEffect, useState} from "react";
import NovaResposta from "./NovaResposta";
import {useParams} from "react-router";

export function ListarResposta() {
    const [resposta, setResposta] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        fetch(`http://localhost:3008/resposta/listartodas/${id}`)
            .then(response => response.json())
            .then(listaResposta => {
                setResposta(listaResposta)
            })
    }, [id]);

    function deletaresposta(resposta) {
        console.log(resposta.id_usuario)
        console.log(localStorage.getItem("id"))
        if(resposta.id_usuario === parseInt(localStorage.getItem("id")) ) {
            fetch(`http://localhost:3008/resposta/excluir/${resposta.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                if (response.ok) {
                    alert("Resposta deletado com sucesso!")
                    window.location.href = "/home";
                }
            })
        }
    }

    function editarresposta(resposta) {
        if(resposta.id_usuario === parseInt(localStorage.getItem("id")) ) {
            resposta.msg = prompt("Digite a nova resposta: ");
            if(resposta.msg !== "" && resposta.msg !== null) {
                fetch(`http://localhost:3008/resposta/editar/${resposta.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(resposta)
                }).then((response) => {
                    if (response.ok) {
                        alert("Resposta editada com sucesso!")
                        window.location.href = "/home";
                    }
                })
            }
        }
    }

    return (
        <div className='lista mx-8'>
            <NovaResposta />
            <h3 className="text-3xl font-bold mt-2 sm:mx-auto">Listagem de Resposta</h3>
            <table className="min-w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th className="w-32">Opções</th>
                </tr>
                </thead>
                <tbody>
                {resposta.map((resposta) => {
                    return (
                        <tr key={resposta.id}>
                            <td className="text-center">{resposta.id}</td>
                            <td className="text-center">{resposta.msg}</td>
                            <td className="grid grid-cols-2 w-32 justify-end">
                                <svg onClick={() => {
                                    editarresposta(resposta)
                                } } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <svg onClick={() => {
                                    deletaresposta(resposta)
                                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>

        </div>
    );

}