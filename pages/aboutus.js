import { Container } from "react-bootstrap";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/dist/next-server/lib/head";

export default function AboutUs() {
  return (
    <Layout aboutUs>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <h1>about us</h1>
        <br />
        <p>Hoosier Hackers is on a mission to bring together students at IU interested in building software.</p>
        <p>
          The goal is to foster a community of peers to collaborate, bounce ideas off each other, get feedback,
          support the work of our peers, and hack projects together.
        </p>
      </Container>
    </Layout>
  );
}
