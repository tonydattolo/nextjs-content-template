import { Container } from "react-bootstrap";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/dist/next-server/lib/head";
// import KUTE from "kute.js";

import styles from "../styles/aboutus.module.scss";

// const tween = KUTE.fromTo(
//   '#blob2',
//   { path: '#blob1' },
//   { path: '#blob2' },
//   { repeat: 99, duration: 3000 }
// )
// tween.start()

export default function AboutUs() {
  return (
    <Layout aboutUs>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.aboutusMainSection}>
        <Container fluid="md">
          <h1>about us</h1>
          <div className={styles.aboutUsCopy}>
            <p>
              web3 dev club is dedicated to bringing together software engineers, designers, and artists
              to build web3 blockchain-based applications
            </p>

          </div>
        </Container>
      </section>
    </Layout>
  );
}
