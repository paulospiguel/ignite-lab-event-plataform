/* @vite-ignore */

import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning, Spinner } from "phosphor-react";

import Card from "./Card";

import "@vime/core/themes/default.css";
import { getLessonBySlugQuery } from "../graphql/query";
import { formatSearchURL } from "../utils";

interface VideoProps {
  lessonSlug: string;
}

function Video({ lessonSlug }: VideoProps) {
  const { data, loading } = getLessonBySlugQuery(formatSearchURL(lessonSlug));

  return (
    <div className="relative flex-1">
      {loading ? (
        <>
          <div className="h-full w-full max-h-[60vh] animate-pulse bg-slate-700" />
          <div className="flex m-6 space-x-4 animate-pulse ">
            <div className="w-10 h-10 rounded-full bg-slate-700"></div>
            <div className="flex-1 py-1 space-y-6">
              <div className="h-2 rounded bg-slate-700"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                  <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                </div>
                <div className="h-2 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 m-6">
            <div className="w-full p-10 animate-pulse bg-slate-700" />
            <div className="w-full p-10 animate-pulse bg-slate-700" />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center bg-black">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
              <Player>
                <Youtube videoId="SO4-izct7Mc" />
                <DefaultUi />
              </Player>
            </div>
          </div>
          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
                <p className="mt-4 leading-relaxed text-gray-200">
                  {data?.lesson?.description}
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    className="w-16 h-16 border-blue-500 rounded-full"
                    src={data?.lesson?.teacher.avatarURL}
                    alt=""
                  />

                  <div className="flex flex-col">
                    <strong className="block text-2xl font-bold">
                      {data?.lesson?.teacher.name}
                    </strong>
                    <span className="block text-sm text-gray-200">
                      {data?.lesson?.teacher.bio}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700"
                >
                  <DiscordLogo size={24} />
                  Comunidade do Discord
                </a>
                <a
                  href=""
                  className="flex items-center justify-center gap-2 p-4 text-sm font-bold text-blue-500 uppercase border border-blue-500 rounded hover:text-gray-900 hover:bg-blue-500 "
                >
                  <Lightning size={24} />
                  Acesse o desafio
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-20">
              <Card
                description="Acesse o material complementar para acelerar seu desenvolvimento"
                title="Material Complementar"
              />
              <Card
                title="Wallpaper Exclusivos"
                description="Baixe os wallpaper exclusivos do PRSpiguel Lab"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Video;
