import type { ReactNode } from "react";
import { StoreProvider } from "@store/StoreProvider";
import type { Metadata } from "next";
import { METDATA } from "@lib/constants";
import Header from "@components/structure/Header";
import Footer from "@components/structure/Footer";
import Common from "@components/structure/Common";

import "../styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${METDATA.defaultSiteTitle}`,
    default: METDATA.defaultSiteTitle,
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`antialiased flex flex-col min-h-screen`}>
          <Header />

          <main className="flex-grow container mx-auto max-w-4xl py-12 px-4 lg:px-0 space-y-12">
            {children}
            <Common />
          </main>

          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
