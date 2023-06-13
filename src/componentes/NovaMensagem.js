export default function NovaMensagem() {
    function enviarMensagem(event) {
        let msg = document.getElementById("mensagem").value;
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"

        }
        if(msg !== "") {
            msg.mensagem = prompt("Digite a mensagem");
            fetch("http://localhost:3008/mensagem/adicionar", {
                method: "POST",
                headers: headersList,
                body: "msg=" + msg + "&id_usuario=" + localStorage.getItem("id"),

            }).then((response) => {
                if (response.status === 200) {
                    alert("Mensagem cadastrada com sucesso!");
                } else {
                    alert("Erro ao cadastrar!");
                }
            });
            window.location.href = "/home";
        }
    }
    return (
        <div className="sm:col-span-2">
            <label htmlFor="mensagem" className="block text-sm font-semibold leading-6 text-gray-900">
                Menssagem
            </label>
            <div className="mt-2.5">
              <textarea
                  name="mensagem"
                  id="mensagem"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="Digite a mensagem"
              />
            </div>
            <br />
            <button
                onClick={enviarMensagem}
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Cadastrar
            </button>
        </div>
    )
}