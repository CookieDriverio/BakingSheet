// post.service.js
import { gql } from "@apollo/client";
import apolloClient from "../../apollo-client";

export async function getByID(id) {
  return await apolloClient
    .query(
      {
        query: gql`
          query GetPageByID($id: String) {
            cmsPage(id: $id) {
              content
              content_heading
              identifier
              meta_description
              meta_keywords
              meta_title
              page_layout
              title
              url_key
            }
          }
        `,
      },
      {
        variables: { id: id },
      }
    )
    .then((result) => {
      return result;
    });
}

export async function getBySlug(slug) {
  return await apolloClient
    .query({
      query: gql`
        query GetPageByIdentifier($identifier: String) {
          cmsPage(identifier: $identifier) {
            content
            content_heading
            identifier
            meta_description
            meta_keywords
            meta_title
            page_layout
            title
            url_key
          }
        }
      `,
      variables: { identifier: slug },
    })
    .then((result) => {
      return result.data.cmsPage;
    })
    .catch(e => {
      return null;
    });
}
