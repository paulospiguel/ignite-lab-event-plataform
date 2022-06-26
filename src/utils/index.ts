import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { toast, ToastOptions } from "react-toastify";

export function formatDate(date: Date | string, formatDate: string) {
  return format(new Date(date), formatDate, {
    locale: ptBR,
  });
}

export function formatSearchURL(searchParam: string) {
  return searchParam.slice(1);
}

export function notify(message: string, opt?: ToastOptions) {
  toast(message, {
    ...opt,
    theme: "colored",
  });
}
