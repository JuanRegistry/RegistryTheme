import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Header from "../components/header/header"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/siderbar"
import MainContent from "../components/main-content/main-content"
import "../styles/style.css"

const IndexPage = ({data}) => {
    const { profile, experience } = data

    return (
    <div className="antialiased min-h-full bg-back bg-fixed leading-normal font-text text-front">
        <SEO />
        <CustomFonts />
  
        <Header />
  
        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
          <Sidebar profile={profile} />

          <MainContent profile={profile} experience={experience.nodes} />

        </div>
    </div>

    )
}

export default IndexPage

export const query = graphql`
  query {
    profile: profileYaml {
      ...ProfileFragment
    }
    experience: allExperienceYaml {
      nodes {
        ...ExperienceFragment
      }
    }
  }
`