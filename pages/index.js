import Head from "next/head";
import Link from "next/link";
import returnProps from "../_services/props";
import Layout from "../components/layout/Layout";

function Page(props) {
  return (<Layout {...props} />);
}

// This gets called on every request
export async function getServerSideProps() {
  return returnProps("home");
}

export default Page;
