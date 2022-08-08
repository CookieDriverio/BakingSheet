import Head from "next/head";
import Link from "next/link";
import { getBySlug as getPageBySlug } from "../_services/gplQuery/page.service";
import Layout from "../components/layout/Layout";

function Page(props) {
  return (<Layout {...props} />);
}

export async function getStaticProps() {
  let page = await getPageBySlug("no-route");
  return {
    props: {
      page: page,
    },
  };
}

export default Page;
