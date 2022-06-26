import {
  Link,
  useLocation,
  useResolvedPath,
  useSearchParams,
} from "react-router-dom";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast } from "date-fns";

import { LessonProps } from "../types";
import { formatDate, formatSearchURL } from "../utils";
import classNames from "classnames";

function Lesson({ title, slug, availableAt, lessonType }: LessonProps) {
  const isLessonAvailable = isPast(new Date(availableAt));

  const { search: searchSlug, pathname }: { search: string; pathname: string } =
    useLocation();

  const isLessonActive = slug === formatSearchURL(searchSlug);

  return (
    <Link
      to={isLessonAvailable ? `/event/lesson?${slug}` : pathname}
      className={classNames("outline-none group", {
        "pointer-events-none": !isLessonAvailable,
      })}
    >
      <span className="text-gray-300">
        {formatDate(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm")}
      </span>

      <div
        className={classNames(
          "p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500 transition-colors",
          { "bg-green-500": isLessonActive && isLessonAvailable }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm font-medium text-blue-500",
                {
                  "text-white": isLessonActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white font-bold border border-green-300",
              {
                "border-white": isLessonActive,
              }
            )}
          >
            {lessonType === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong
          className={classNames("block mt-5 text-gray-200", {
            "text-white": isLessonActive,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}

export default Lesson;
