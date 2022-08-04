import Head from "next/head";
import Link from "next/link";
import returnProps from "../../_services/props";
import { getBySlug as getPageBySlug } from "../../_services/gplQuery/page.service";

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
export async function getServerSideProps(context) {
  const params = context.params;
  let URL = "";
  if (Array.isArray(params.slug)) {
    URL = params.slug.join("/");
  } else {
    URL = params.slug;
  }

  const page = await getPageBySlug(URL);
  if (page === null || URL === "home") return {notFound: true};
  return returnProps(page);
}

export default Page;
