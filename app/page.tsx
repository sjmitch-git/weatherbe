import type { Metadata } from "next";
import { METDATA } from "@lib/constants";

export default function IndexPage() {
  return (
    <article>
      <h1 className="text-4xl mb-8 font-semibold">Welcome</h1>
      <p className="text-lg mb-8 max-w-prose">
        <strong>{METDATA.defaultSiteTitle}</strong> is your go-to app for accurate and up-to-date
        weather forecasts. Stay informed about current conditions, daily forecasts, and more.
      </p>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Weather Be",
};
