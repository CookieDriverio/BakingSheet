import Head from "next/head";
import Link from "next/link";
import returnProps from "../_services/props";

import { getBySlug as getPageBySlug } from "../_services/gplQuery/page.service";

function Page(props) {
  console.log(props.page);
  return (
    <div>
      <h1>{props.page.content_heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.page.content }}></div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const page = await getPageBySlug("home");
  if (page === null) return {notFound: true};
  return returnProps(page);
}

export default Page;
