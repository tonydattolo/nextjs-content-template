import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../styles/index.module.scss'
// import utilStyles from '../styles/utils.module.scss'
import Link from 'next/dist/client/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import { Card } from 'react-bootstrap'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function Posts({ allPostsData }) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
 
          <section>
            <h2>Posts:</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                      <br/>
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>

          <section>
            {allPostsData.map(({ id, date, title }) => (
              <Card key={id} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small>
                      <Date dateString={date} />
                    </small>
                </Card.Footer>
              </Card>
            ))}
      
          </section>
  

  
      </Layout>
    )
  }
  

