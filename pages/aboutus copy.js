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
      <Container>
        <h1>testing curves</h1>

        <br />

        {/* section*8>(h1>{nice curves})+p>lorem   */}
        <section>
          <h1>Nice Curves!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            reiciendis quae officiis voluptas magnam placeat soluta omnis a
            autem? Laborum eaque provident, incidunt ad natus esse? Natus
            facilis vel repellendus?
          </p>
        </section>

        <section className={styles.waveExample}>
          <h1>waves bottom</h1>
          <p>
            Quae quidem aperiam, blanditiis eaque amet ratione ea nisi quaerat
            repellendus beatae facere voluptate cupiditate totam repudiandae
            fugiat architecto, corporis facilis odit. Debitis voluptatem
            repellat adipisci, voluptatum nisi quod. Quibusdam.
          </p>

          <div className={styles.standardWaveBottom}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
        </section>

        <section>
          <h1>Nice Curves!</h1>
          <p>
            Quas eius repellendus quod suscipit similique! Nisi, sequi illo.
            Blanditiis adipisci enim iusto aspernatur laudantium aperiam
            eligendi ab similique. Aperiam autem, commodi cupiditate unde
            assumenda dicta non a excepturi alias?
          </p>
        </section>

        <section className={styles.waveExample2}>
          <h1>top</h1>
          <p>
            Voluptatem quos rem cupiditate incidunt iusto? Commodi consequuntur
            ab quaerat temporibus qui labore maiores perferendis eos, neque
            ducimus harum consectetur praesentium perspiciatis voluptate
            corporis non. Possimus tenetur perspiciatis atque autem?
          </p>
          <div className={styles.standardWaveTop}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
        </section>

        <section>
          <h1>Nice Curves!</h1>
          <p>
            Cupiditate commodi odio libero provident aspernatur sit eius.
            Impedit laboriosam cum quisquam, unde distinctio magni quam
            temporibus, modi, voluptatum tenetur vel saepe incidunt laudantium
            eaque ipsum ipsa. Explicabo, quae dicta?
          </p>
        </section>

        <section className={`${styles.blobSection} ${styles.blob1}`}>
          <h1>blob1</h1>
          <p>
            Ad non quisquam nihil saepe ipsam alias, animi repudiandae
            laudantium iusto debitis dolorem dolorum itaque cumque qui eaque
            quis similique aliquid quas aut culpa perferendis unde doloribus?
            Laboriosam, accusantium et!
          </p>
        </section>
        <section className={`${styles.blobSection} ${styles.blob2}`}>
          <h1>blob2</h1>
          <p>
            Ad non quisquam nihil saepe ipsam alias, animi repudiandae
            laudantium iusto debitis dolorem dolorum itaque cumque qui eaque
            quis similique aliquid quas aut culpa perferendis unde doloribus?
            Laboriosam, accusantium et!
          </p>
        </section>

        <section className={`${styles.layeredWaves} ${styles.layeredWavesTop}`}>
          <h1>layeredWaves</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>

        <section
          className={`${styles.layeredWaves} ${styles.layeredWavesRight}`}
        >
          <h1>layeredWaves</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>

        <section className={`${styles.polyGrid} ${styles.placeholder}`}>
          <h1>layeredWaves</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>

        <section className={`${styles.stepsLeft} ${styles.leftFix}`}>
          <h1>layeredWaves</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>

        <section className={`${styles.circleGrid} ${styles.placeholder}`}>
          <h1>layeredWaves</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>

        <section className={`${styles.spinnyBlob} ${styles.spinnyTop}`}>
          {/* <h1>blob open</h1>
          <p>Cupiditate commodi odio libero provident aspernatur sit eius. Impedit laboriosam cum quisquam, unde distinctio magni quam temporibus, modi, voluptatum tenetur vel saepe incidunt laudantium eaque ipsum ipsa. Explicabo, quae dicta?</p> */}
        </section>

        <section className={`${styles.spinnyBlob} ${styles.spinnyMid}`}>
          <h1>blob mid</h1>
          <p>
            Ad non quisquam nihil saepe ipsam alias, animi repudiandae
            laudantium iusto debitis dolorem dolorum itaque cumque qui eaque
            quis similique aliquid quas aut culpa perferendis unde doloribus?
            Laboriosam, accusantium et!
          </p>
          {/* <svg
            id="visual"
            viewBox="0 0 900 360"
            width="900"
            height="360"
            version="1.1"
          >
            <g transform="translate(462.526746260964 191.87899770283406)">
              <path id="blob1"
                d="M68.1 -66.8C91.5 -44.8 115.7 -22.4 119.1 3.4C122.6 29.2 105.1 58.5 81.8 73.5C58.5 88.5 29.2 89.2 2.4 86.9C-24.5 84.5 -49 79 -79 64C-109 49 -144.5 24.5 -144.6 -0.1C-144.7 -24.7 -109.5 -49.5 -79.5 -71.5C-49.5 -93.5 -24.7 -112.7 -1.2 -111.6C22.4 -110.4 44.8 -88.8 68.1 -66.8"
                fill="#69f6fa"
              ></path>
            </g>
            <g transform="translate(447.5732760845015 204.17221272853055)">
              <path id="blob2"
                d="M107.5 -111.5C130.2 -84.9 133.1 -42.4 126.4 -6.7C119.7 29 103.3 58 80.6 73C58 88 29 89 -4 93C-37 97 -74 104 -96 89C-118 74 -125 37 -124.7 0.4C-124.3 -36.3 -116.6 -72.6 -94.6 -99.3C-72.6 -125.9 -36.3 -143 3.1 -146C42.4 -149.1 84.9 -138.2 107.5 -111.5"
                fill="#69f6fa"
              ></path>
            </g>
          </svg> */}
        </section>

        <section className={`${styles.spinnyBlob} ${styles.spinnyBot}`}>
          {/* <h1>blob end</h1>
          <p>Officia porro, ea nostrum vero earum voluptatibus debitis officiis fuga voluptate sint nemo, quos, ipsa voluptates beatae at laboriosam voluptatem aliquid sequi. Voluptas doloremque magni beatae, harum magnam doloribus reprehenderit.</p> */}
        </section>

        <section>
          <h1>Nice Curves!</h1>
          <p>
            Saepe quas, praesentium labore animi qui aliquid quam perspiciatis
            nesciunt cupiditate obcaecati quidem ex quod eius nam blanditiis
            libero, nisi ab! Adipisci nisi eaque nobis omnis numquam ea atque
            doloribus.
          </p>
        </section>
      </Container>
    </Layout>
  );
}
