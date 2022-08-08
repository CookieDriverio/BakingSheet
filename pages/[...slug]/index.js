import Head from "next/head";
import Link from "next/link";
import returnProps from "../../_services/props";
import Layout from "../../components/layout/Layout";

function Page(props) {
  console.log(props.page);
  return (<Layout {...props} />);
}

// This gets called on every request
export async function getServerSideProps(context) {
  const params = context.params;
  let URL = "";
  if (Array.isArray(params.slug)) {
    URL = params.slug.join("/");
  } else {
    URL = params.slug;
  }

  return returnProps(URL);
}

export default Page;
