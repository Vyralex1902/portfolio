import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { SpeedInsights } from "@vercel/speed-insights/remix"

import stylesheet from "~/tailwind.css?url";
import "./styles/global.css";
import Heading from "./heading";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca Montanari's Portfolio" },
    { name: "Luca Montanari's Portfolio", content: "Welcome to Luca's Portfolio!" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "favicon.ico",
    type: "image/ico",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
        <link href="favicon.ico"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Heading></Heading>
        {children}
        <SpeedInsights />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default App;