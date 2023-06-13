
export function EditarUser() {
    var nome = localStorage.getItem("nome");
    nome = nome.replace(/['"]+/g, '');
    var email = localStorage.getItem("email");
    email = email.replace(/['"]+/g, '');

    function editar(event) {
        event.preventDefault();

        fetch("http://localhost:3008/usuario/editar/" + email, {
            method: "PUT",
            headers: {
                "Accept": "/",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "nome=" + document.getElementById("name").value + "&email=" + document.getElementById("email").value + "&senha=" + document.getElementById("password").value,
        }).then((response) => {
            if (response.status === 200) {
                alert("Editado com sucesso!");
                localStorage.setItem("nome", document.getElementById("name").value);
                localStorage.setItem("email", document.getElementById("email").value);
                localStorage.setItem("senha", document.getElementById("password").value);
                window.location.href = "/home";
            } else {
                alert("Erro ao cadastrar!");
            }
        });

    }
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="text-3xl font-bold mt-2 sm:mx-auto">Editar</div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={editar}>
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                          Nome
                      </label>
                      <div className="mt-2">
                          <input
                              defaultValue={nome}
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
                              defaultValue={email}
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
                              placeholder="Digite a nova senha"
                          />
                      </div>
                  </div>

                  <div>
                      <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Enviar
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}