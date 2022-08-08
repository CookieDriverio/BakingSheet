// post.service.js
import { gql } from "@apollo/client";
import apolloClient from "../../apollo-client";

// export async function getByID(id) {
//   return await apolloClient
//     .query(
//       {
//         query: gql`
//           query GetCategoriesByID($id: String) {
//             cmsPage(id: $id) {
//               content
//               content_heading
//               identifier
//               meta_description
//               meta_keywords
//               meta_title
//               page_layout
//               title
//               url_key
//             }
//           }
//         `,
//       },
//       {
//         variables: { id: id },
//       }
//     )
//     .then((result) => {
//       return result;
//     });
// }

export async function getBySlug(slug) {
  return await apolloClient
    .query({
      query: gql`
      query GetCategoryListByIdentifier($identifier: CategoryFilterInput) {
        categoryList(filters: $identifier) {
          available_sort_by
          breadcrumbs {
            category_id
            category_level
            category_name
            category_uid
            category_url_key
            category_url_path
          }
          canonical_url
          children {
            level
            meta_description
            meta_keywords
            meta_title
            name
            uid
            url_key
            url_path
            url_suffix
          }
          children_count
          cms_block {
            content
            identifier
            title
          }
          created_at
          custom_layout_update_file
          default_sort_by
          description
          display_mode
          filter_price_range
          id
          image
          include_in_menu
          is_anchor
          landing_page
          level
          meta_description
          meta_keywords
          meta_title
          name
          path
          path_in_store
          position
          product_count
          uid
          updated_at
          url_key
          url_path
          url_suffix
        }
      }      
      `,
      variables: { identifier: { url_path: { eq: slug } } },
    })
    .then((result) => {
      if(result.data.categoryList[0]) {
        return result.data.categoryList[0];
      } else {
        return null;
      }
    })
    .catch(e => {
      return null;
    });
}

export async function getByAll() {
  return await apolloClient
    .query(
      {
        query: gql`
          query GetCategories {
            {
              categoryList(filters: {}) {
                available_sort_by
                breadcrumbs {
                  category_id
                  category_level
                  category_name
                  category_uid
                  category_url_key
                  category_url_path
                }
                canonical_url
                children {
                  level
                  meta_description
                  meta_keywords
                  meta_title
                  name
                  uid
                  url_key
                  url_path
                  url_suffix
                }
                children_count
                cms_block {
                  content
                  identifier
                  title
                }
                created_at
                custom_layout_update_file
                default_sort_by
                description
                display_mode
                filter_price_range
                id
                image
                include_in_menu
                is_anchor
                landing_page
                level
                meta_description
                meta_keywords
                meta_title
                name
                path
                path_in_store
                position
                product_count
                uid
                updated_at
                url_key
                url_path
                url_suffix
              }
            }
            
          }
        `,
      },
      {
        variables: { id: id },
      }
    )
    .then((result) => {
      if(result) {
        return result;
      } else {
        return null;
      }
    })
    .catch(e => {
      return null;
    });
}
export async function getMenu() {
  return await apolloClient
    .query(
      {
        query: gql`
          query GetCategoriesMenu {
            categoryList(filters: {}) {
              position
              name
              meta_title
              meta_description
              meta_keywords
              include_in_menu
              path
              url_key
              url_path
            }
          }          
        `,
      }
    )
    .then((result) => {
      if(result.data.categoryList) {
        const menu = [];
        result.data.categoryList.forEach(item => {
          if(item.include_in_menu === 1) {
            menu.push(item);
          }
        });
        const arr = [
          [500, 'Foo'],
          [600, 'bar'],
          [700, 'Baz']
        ];
        
        menu.sort((a,b) => (a.path > b.path) ? 1 : ((b.path > a.path) ? -1 : 0))


        return menu;
      } else {
        return null;
      }
    })
    .catch(e => {
      return null;
    });
}
