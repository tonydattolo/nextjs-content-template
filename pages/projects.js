import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/dist/client/link";
import Date from "../components/date";
import { getSortedProjectsData } from "../lib/projects";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import styles from "../styles/events.module.scss";

const sectionName = "projects";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.eventsSection}>
        {allProjectsData.map(
          ({ id, date, title, author, preview, eventDate }) => (
            <Link href={`/${sectionName}/${id}`}>
            <Card key={id} className={styles.eventCard}>
              <Card.Body className="pb-0">
                <Card.Title className={styles.cardTitle}>
                    {title}
                </Card.Title>
                <Card.Subtitle className={`mb-2 text-muted ${styles.cardSubtitle}`}>
                  <span>Event Date: </span> 
                  <Date dateString={eventDate} />
                </Card.Subtitle>
                <Card.Text className={styles.cardPreview}>
                  {preview}
                </Card.Text>
                <hr className={styles.cardSeperator}/>
              </Card.Body>
              <Card.Footer className={styles.cardFooter}>
                <small>
                  <span>posted on: </span>
                  <Date dateString={date} />
                </small>
              </Card.Footer>
            </Card>
            </Link>
          )
        )}
      </section>
    </Layout>
  );
}
