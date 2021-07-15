import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.scss'
import utilStyles from '../styles/utils.module.scss'
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
      <section id="heroSection">
        <Container fluid="md">
          <Row className={styles.heroRow}>
            <Col md={6}>
              <TypeWriter />
              <p>You want to nerd-out about emerging tech.</p>
              <p>You want to find teammates for a hackathon.</p>
              <p>You want to create projects to impress employers.</p>
              <p>You want to find find co-founders to build startups.</p>
              <p>You want to learn about the next big thing.</p>
              <p>You belong here.</p>
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

      <section className={styles.hackathonSection}>
        <Container fluid="md">
          <Row>
            <Col>
              <h1>HackIU2022</h1>
              <p>
                Join us during the second semester for IU's inaugural hackathon, 
                a TechCrunch Disrupt Startup Battlefield style demo-day.
                This years theme is Marketplaces and Web3.
              </p>
              <p></p>
            </Col>
          </Row>

        </Container>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>

            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
