import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/api";

export async function getStaticProps() {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Josh and I'm a web developer trying out NextJs and trying
          something different.
        </p>
        <p>
          This is a sample website - you’ll be building a site like this on
          NextJs tutorial.
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Users</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, name }) => (
            <li className={utilStyles.listItem} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
