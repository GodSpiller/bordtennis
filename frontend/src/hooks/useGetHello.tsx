import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export function useGetHello(url: URL | string) {
  return useFetch<string>(url);
}
