import React, { useState }  from "react"
import { StaticQuery, graphql } from "gatsby"
import AchievementList from "./achievement-list"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSummerSchoolYaml {
          totalCount
          edges {
            node {
              id
              Member
              Year
              University
            }
          }
        }
      }
    `}
    render={data => (
      <div className="p-2 my-4">
        <AchievementList title="Summer School"  members={data.allSummerSchoolYaml.edges} tagname="University" />
      </div>
    )}
  />
)
