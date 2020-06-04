/** @jsx jsx */
import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { css, jsx } from '@emotion/core'
import Layout from '../compnents/Layout'
import { Helmet } from 'react-helmet'
import TravelCard from '../compnents/TravelCard'
import LeisureCard from '../compnents/LeisureCard'
import uniqid from 'uniqid'
import ServiceCard from '../compnents/ServiceCard'
import CollectionCard from '../compnents/CollectionCard'

class Rootindex extends React.Component {
  render() {
    const cards = get(this, 'props.data.allContentfulCards.nodes')

    const Travel = cards.filter((e) => e.category === 'Travel')

    const Leisure = cards.filter((e) => e.category === 'Leisure')
    const Service = cards.filter((e) => e.category === 'Service')

    return (
      <Layout>
        {/* {cards.map((card) => (
          <TravelCard
            key={card.name}
            image={card.image[0].fluid.src}
            name={card.name}
            category={card.category}
            description={card.description}
          />
        ))} */}

        {/* <TravelCard
          image={cards[1].image[0].fluid.src}
          name={cards[1].name}
          category={cards[1].category}
          description={cards[1].description}
        /> */}
        <section
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1280px;
          `}
        >
          <TravelCard
            image={Travel[0].image[0].fluid.src}
            name={Travel[0].name}
            category={Travel[0].category}
            description={Travel[0].description}
          />

          <LeisureCard
            bigImage={Leisure[0].image[0].fluid.src}
            name={Leisure[0].name}
            category={Leisure[0].category}
            description={Leisure[0].description}
            smallImages={Leisure[0].images}
          />
        </section>
        <section
          css={css`
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
          `}
        >
          {Service.map((serve) => (
            <ServiceCard
              name={serve.name}
              key={uniqid()}
              description={serve.description}
              image={serve.image[0].file.url}
              backgroundColor={serve.backgroundColor}
            />
          ))}
        </section>
        <section>
          <CollectionCard />
        </section>
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
          file {
            url
          }
        }
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        name
        description
        backgroundColor
      }
    }
  }
`
