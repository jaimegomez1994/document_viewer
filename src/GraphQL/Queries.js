import { gql } from "@apollo/client";

export const LOAD_DOCUMENT = gql`
  query  {
  share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
    identifier
    version {
      document {
        name
        artboards {
          entries {
            name
            identifier
            files {
              url
              height
              width
              scale
              thumbnails {
                type
                url
              }
            }
          }
        }
      }
    }
  }
}
`