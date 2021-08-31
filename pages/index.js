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

      <section className={styles.introSection}>
          <h1>web3 dev club</h1>
          
          <p>building blockchain apps</p>

        <div>
          <Button href="" className={styles.discordButton}><FontAwesomeIcon icon={faDiscord} />  Discord</Button>
          <Button href="mailto:hhackers@iu.edu" className={styles.emailButton}><FontAwesomeIcon icon={faEnvelope} />  Email Us</Button>

        </div>
        
        </section>

      {/* Hero Text */}


    

    </Layout>
  )
}
