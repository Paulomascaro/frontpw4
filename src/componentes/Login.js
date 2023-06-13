
//TODO: fazer verificação dos campos enviados no login e assim setar usuario no localstorage
export default function Login() {

    async function login(event) {
        event.preventDefault();
        let user = "email=" + document.getElementById("email").value + "&senha=" + document.getElementById("password").value;
        let headersList = {
            "Accept": "/",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        await fetch("http://localhost:3008/usuario/login", {
            method: "POST",
            headers: headersList,
            body: user,

        }).then(async (response) => {
             if (response.status === 200) {
                 var data = await response.json();

                 console.log("response: ", data)

                 localStorage.setItem("nome", JSON.stringify(data.nome));
                 localStorage.setItem("email", JSON.stringify(data.email));
                 localStorage.setItem("id", data.id);

                 window.location.href = "/home";

             } else {
                 alert("Erro ao logar!");
             }
            });

    }

    return (
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img className="mx-auto h-full w-auto"
                                 src="/LogoTipoPergunteAqui!.PNG"
                                 alt="Your Company">
                            </img>
                        </div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Insira seus dados
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={login}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Digite o email"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" placeholder="Digite a Senha">
                                        Senha
                                    </label>
                                    {/*<div className="text-sm">*/}
                                    {/*    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                                    {/*        Esqueci minha senha?*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Digite a Senha"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
    )
}
