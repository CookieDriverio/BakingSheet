import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  let returnHTML = null;
  if(props.page.__typename === "CategoryTree") {
    returnHTML = (
      <>
        <h1>{props.page.content_heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.page.description }}></div>
        {props.children}
      </>
    );
  }
  if(props.page.__typename === "CmsPage") {
    returnHTML = (
      <>        
        <h1>{props.page.content_heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.page.content }}></div>
        {props.children}
      </>
    );
  }
  if(props.page === "noPage") {
    returnHTML = (
      <>        
        {props.children}
      </>
    );
  }
  return (
    <>
      <Navbar CategoryTree={props.CategoryTree}/>
      <main>
        {returnHTML}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

