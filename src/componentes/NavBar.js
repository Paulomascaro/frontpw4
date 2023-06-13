
import {Link} from "react-router-dom";


export default function NavBar() {
    const usuario = localStorage.getItem("nome");

    function logout() {
        localStorage.clear();
        window.location.href = "/home";
    }

    function deletar() {
        var email = localStorage.getItem("email");
        email = email.replace(/['"]+/g, '');
        fetch(`http://localhost:3008/usuario/excluir/${email}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.ok){
                alert("Usuario deletado com sucesso!")
                logout();
            }
        })
    }

    if(usuario){
        return (
            <nav className="bg-blue-950">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <img className="h-8 w-auto sm:h-10 px-96 mx-80 ml-10 relative:float-left" src="/LogoTipoPergunteAqui!.PNG"  alt="Workflow"/>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="home" className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Home
                                    </Link>
                                    <Link to="editar" className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Editar
                                    </Link>
                                    <Link onClick={deletar} className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Deletar
                                    </Link>
                                    <Link onClick={logout} className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } else{
        return (
            <nav className="bg-blue-950">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <img className="h-8 w-auto sm:h-10 px-96 mx-80 ml-10 float-left relative logo" src="/LogoTipoPergunteAqui!.PNG"  alt="Workflow"/>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="home" className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Home
                                    </Link>
                                    <Link to="cadastro" className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Cadastro
                                    </Link>
                                    <Link to="login" className="text-white hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current={undefined}>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}