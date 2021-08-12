import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import NavbarHH from "./NavbarHH";

export const siteTitle = "Hoosier Hackers";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* need to include this link to prevent large icon lazy loading with ssr */}
        <link href="https://use.fontawesome.com/releases/v5.15.4/css/svg-with-js.css" rel="stylesheet"></link>

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charset='UTF-8' />
      </Head>

      <NavbarHH />

      <main>{children}</main>
    </>
  );
}
