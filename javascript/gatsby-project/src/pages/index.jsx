import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CarouselComponent from '../components/commons/carousel'


const IndexPage = () => {
  const { firstImage,  secondImage, thirdImage } = useStaticQuery(graphql`
    query {

      firstImage: file(relativePath: { eq: "carousel/carousel-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      secondImage: file(relativePath: { eq: "carousel/carousel-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      thirdImage: file(relativePath: { eq: "carousel/carousel-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

  const images = [ firstImage.childImageSharp.fluid,
                   secondImage.childImageSharp.fluid,                   
                   thirdImage.childImageSharp.fluid ];

  return (
    <Layout>
      <SEO title="Home" />
      <CarouselComponent carouselImages={ images } />
      
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot Using TypeScript &quot</Link>
    </Layout>
  )
}

export default IndexPage
