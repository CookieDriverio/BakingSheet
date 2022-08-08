import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  console.log(props.menu);
  let returnHTML = null;
  if(props.page.__typename === "CategoryTree") {
    returnHTML = (
      <>
        {props.page.__typename}
        <h1>{props.page.content_heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.page.description }}></div>
        {props.children}
      </>
    );
  }
  if(props.page.__typename === "CmsPage") {
    returnHTML = (
      <>        
        {props.page.__typename}
        <h1>{props.page.content_heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.page.content }}></div>
        {props.children}
      </>
    );
  }
  return (
    <>
      <Navbar />
      <main>
        {returnHTML}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

