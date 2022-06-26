//import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { CREATE_SUBSCRIBE } from "../graphql/mutation";
import { notify } from "../utils";

interface SubscribeProps {}

interface InputsForms {
  name: string;
  email: string;
}

function Subscribe({}: SubscribeProps) {
  const [inputs, setInputs] = useState({} as InputsForms);

  const navigate = useNavigate();

  const [createSubscribe, { data, loading }] = useMutation(CREATE_SUBSCRIBE);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await createSubscribe({
        variables: inputs,
      });
    } catch (error) {
      console.log({ error });
      notify("Error ao realizar o cadastro!", {
        type: "error",
      });
      return;
    }

    navigate("/event");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blurImage">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight text-">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-500 border border-gray-500 rounded">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
            <input
              required
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="px-5 bg-gray-900 rounded h-14"
              onChange={handleInputChange}
              value={inputs.name}
            />
            <input
              required
              name="email"
              placeholder="Digite seu email"
              type="email"
              className="px-5 bg-gray-900 rounded h-14"
              onChange={handleInputChange}
              value={inputs.email}
            />

            <button
              disabled={loading}
              className="py-4 mt-5 text-sm transition-colors bg-green-500 rounded hover:bg-green-700 disabled:opacity-50"
            >
              Criar minha conta
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/screen-shot.png" className="mt-10" alt="" />
    </div>
  );
}

export default Subscribe;
