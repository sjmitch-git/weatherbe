"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import type { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

const store = makeStore();

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
