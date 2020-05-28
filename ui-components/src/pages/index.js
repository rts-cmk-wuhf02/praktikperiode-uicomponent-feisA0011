import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../compnents/Layout'
import { Helmet } from 'react-helmet'
import TravelCard from '../compnents/TravelCard'

class Rootindex extends React.Component {
  render() {
    const cards = get(this, 'props.data.allContentfulCards.nodes')
    console.log('CARDS', cards)

    return (
      <Layout>
        <TravelCard image={cards[0].image.fluid.src} name={cards[0].name} />
      </Layout>
    )
  }
}
export default Rootindex

export const cardQuery = graphql`
  query cardQuery {
    allContentfulCards {
      nodes {
        category
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        name
        description
      }
    }
  }
`
