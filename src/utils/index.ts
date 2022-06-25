import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(date: Date | string, formatDate: string) {
  return format(new Date(date), formatDate, {
    locale: ptBR,
  });
}

export function formatSearchURL(searchParam: string) {
  return searchParam.slice(1);
}
