import { getBySlug as getPageBySlug } from "./gplQuery/page.service";
import { getBySlug as getCategoriesBySlug, getMenu as getCategoriesMenu } from "./gplQuery/categories.service";

export default async function returnProps(URL) {
  const catMenu = await getCategoriesMenu();

  let page = null;
  if (page === null) page = await getCategoriesBySlug(URL);
  if (page === null) page = await getPageBySlug(URL);
  if (page === null) return {notFound: true};
  return {
    props: {
      page: page,
      menu: catMenu,
    },
  };

}
