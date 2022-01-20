import {gql, useQuery} from '@apollo/client'

const LAUNCHES_INFO = gql`
  query getLaunches {
    launches(limit: 10) {
      id
      mission_name
      launch_success
      details
      launch_year
      launch_site {
        site_name_long
      }
      links {
        flickr_images
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`

export const useLounchesDetailed = () => {
  const {data, loading, error} = useQuery(LAUNCHES_INFO)
  return {data, loading, error}
}
