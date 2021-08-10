import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import styles from '../styles/index.module.scss'
// import utilStyles from '../styles/utils.module.scss'
import Link from 'next/dist/client/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function Announcements({ allPostsData }) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
 
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Announcements:</h2>
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
  

