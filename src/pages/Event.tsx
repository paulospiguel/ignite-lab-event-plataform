import { Info } from "phosphor-react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {
  const { search: slug }: { search: string } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col justify-center text-center align-center">
              <Info size={24} className="m-auto" />
              <p>Não foi selecionada nenhuma aula para ser exibida.</p>
              <p className="text-sm text-gray-400">
                Clique no manu lateral e escolha uma aula.
              </p>
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
