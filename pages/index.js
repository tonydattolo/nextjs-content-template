import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.scss'
// import utilStyles from '../styles/utils.module.scss'
import Link from 'next/dist/client/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TypeWriter from '../components/typewriter'
import Image from 'next/dist/client/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
// import heroPic from '../img/2ppl_coding.svg'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false; /* eslint-disable import/first */


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Text */}
      <section className={styles.heroSection}>
        <Container fluid="md">
          <Row>
            <Col md={6} className={styles.introCopy}>
              <TypeWriter />
              <p> &#128302; nerd-out about emerging tech.</p>
              <p> &#128227; get your projects featured.</p>
              <p> &#128111; find teammates for a hackathon.</p>
              <p> &#128640; create projects to impress employers.</p>
              <p> &#128736; find co-founders to build startups.</p>
              <p> &#129504; learn about the next big thing.</p>
              <br />  
              <p>&#9989; You belong here.</p>
              <br />
              <Button href="" className={styles.discordButton}><FontAwesomeIcon icon={faDiscord} />  Discord</Button>
              <Button href="mailto:hhackers@iu.edu" className={styles.emailButton}><FontAwesomeIcon icon={faEnvelope} />  Email Us</Button>
            </Col>

            <Col md={6}>
              <Image 
                src="/images/undraw_Shared_workspace_re_3gsu.png"
                layout="responsive"
                alt="hackers"
                height={200}
                width={500}
              />
            </Col>



          </Row>
        </Container>  
      </section>

      <section className={styles.newsSection}>
        <Container fluid="md">
          <Row>
            <Col>
              <h1>TOP NEWS:</h1>

            </Col>
          </Row>

        </Container>
      </section>

    

    </Layout>
  )
}
