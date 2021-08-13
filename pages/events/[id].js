import Layout from "../../components/layout";
import { getAllEventsIds, getEventData } from "../../lib/events";
import Date from "../../components/date";
import Head from "next/dist/next-server/lib/head";
import { Container } from "react-bootstrap";
// import utilStyles from '../../styles/utils.module.scss'

export async function getStaticProps({ params }) {
  const eventData = await getEventData(params.id);
  return {
    props: {
      eventData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllEventsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Event({ eventData }) {
  return (
    <Layout>
      <Head>
        <title>{eventData.title}</title>
      </Head>
      <br />
      <Container fluid="md">
        <article style={{ maxWidth: "500px" }}>
          <h1>{eventData.title}</h1>
          <div>
            <Date dateString={eventData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: eventData.contentHtml }} />
        </article>
      </Container>
    </Layout>
  );
}
