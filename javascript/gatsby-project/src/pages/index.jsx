import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CarouselComponent from '../components/commons/carousel'
import WideSearchBarComponent from "../components/commons/searchBar"

const mapStateToProps = ({ search }) => {
  return { search }
}

const mapDispatchToProps = dispatch => {
  return { update: () => dispatch({ type: 'UPDATE' })}
}

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(WideSearchBarComponent)

const IndexPage = ({ search }) => {
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
      <h1>{ search }</h1>
      <SEO title="Home" />
      <ConnectedSearch />
      <CarouselComponent carouselImages={ images } />      
    </Layout>
  )
}

IndexPage.propTypes = {
  search: PropTypes.string.isRequired
}

export default IndexPage
