import Layout from "../../components/layout";
import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import Date from "../../components/date";
import Head from "next/dist/next-server/lib/head";
import { Container } from "react-bootstrap";
// import utilStyles from '../../styles/utils.module.scss'

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <br />
      <Container fluid="md">
        <article style={{ maxWidth: "500px" }}>
          <h1>{projectData.title}</h1>
          <div>
            <Date dateString={projectData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
      </Container>
    </Layout>
  );
}
