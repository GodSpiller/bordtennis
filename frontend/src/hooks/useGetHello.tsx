import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export function useGetHello(url: URL | string) {
  const l = new URL(url);
  l.searchParams.set("name", "john");
  l.searchParams.set("email", "john@gmail.com");

  return useFetch<string>(l);
}
