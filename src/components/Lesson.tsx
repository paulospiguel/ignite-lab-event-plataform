import { CheckCircle, Lock } from "phosphor-react";
import { LessonProps } from "../types";

function Lesson({ title, slug, availableAt, lessonType }: LessonProps) {
  const isLessonAvailable = false;
  return (
    <a href={slug}>
      <span className="text-gray-300">
        {new Date(availableAt)?.toDateString()}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white font-bold border border-green-300">
            {lessonType === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}

export default Lesson;
