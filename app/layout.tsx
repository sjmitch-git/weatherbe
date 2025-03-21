import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Header from "@components/structure/Header";
import Footer from "@components/structure/Footer";
import Dashboard from "@components/dashboard/Dashboard";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`antialiased flex flex-col min-h-screen`}>
          <Header />

          <main className="flex-grow container mx-auto max-w-4xl py-12 px-4 lg:px-0 space-y-12">
            {children}
            <hr />
            <Dashboard />
          </main>

          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
