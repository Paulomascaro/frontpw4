

export default function Cadastro() {
    function cadastro(event) {
        event.preventDefault();
        let user = "nome=" + document.getElementById("name").value + "&email=" + document.getElementById("email").value  + "&senha=" + document.getElementById("password").value;
        let headersList = {
            "Accept": "/",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        fetch("http://localhost:3008/usuario/adicionar", {
            method: "POST",
            headers: headersList,
            body: user,
        }).then((response) => {
            if (response.status === 200) {
                alert("Cadastrado com sucesso!");
                window.location.href = "/home";
            } else {
                alert("Erro ao cadastrar!");
            }
        });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-full w-auto"
                     src="/LogoTipoPergunteAqui!.PNG"
                     alt="Your Company">
                </img>
            </div>
            <div className="text-3xl font-bold mt-2 sm:mx-auto">Cadastrar-se</div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={cadastro}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-500 sm:text-sm sm:leading-6"
                                placeholder="Digite o nome"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            E-mail
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-500 sm:text-sm sm:leading-6"
                                placeholder="Digite o e-mail"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Senha
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"
                                placeholder="Digite a senha"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

