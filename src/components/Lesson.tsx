import { Link } from "react-router-dom";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast } from "date-fns";

import { LessonProps } from "../types";
import { formatDate } from "../utils";

function Lesson({ title, slug, availableAt, lessonType }: LessonProps) {
  const isLessonAvailable = isPast(new Date(availableAt));

  return (
    <Link to={`/event/lesson?${slug}`} className="group">
      <span className="text-gray-300">
        {formatDate(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm")}
      </span>

      <div className="p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white font-bold border border-green-300">
            {lessonType === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong className="block mt-5 text-gray-200">{title}</strong>
      </div>
    </Link>
  );
}

export default Lesson;
