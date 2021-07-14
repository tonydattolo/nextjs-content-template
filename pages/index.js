import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/dist/client/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import { Container, Row, Col } from 'react-bootstrap'
import TypeWriter from '../components/typewriter'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
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
      <section>
        <Container fluid="md">
          <Row>
            <Col md={6}>
              <TypeWriter />
              <p>IU-Bloomington's hub for hackathon teams, startups, </p>
            </Col>

            <Col md={6}>
              <p>something here</p>
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
