import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Scanner = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const scanner = data.allMarkdownRemark.edges;

  return (
    <Layout bodyClass="page-scanners">
          <div class="sidebar-wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>Scanner</h3>
                <strong>Scanner</strong>
              </div>

              <ul class="list-unstyled components">
                {scanner.map(scanner => (
                  <li>
                  <Link to={scanner.node.frontmatter.path}>{scanner.node.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div id="content">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <h1 className="title">{title}</h1>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </nav>
            </div>
          </div>
    </Layout>
  );
};

export const query = graphql`
         query($id: String!) {
           markdownRemark(id: { eq: $id }) {
             frontmatter {
               title
             }
             html
           }
           allMarkdownRemark(
             filter: { frontmatter: { category: { eq: "scanner" } } }
             sort: { fields: [frontmatter___title], order: ASC }
           ) {
             edges {
               node {
                 html
                 frontmatter {
                   title
                   path
                   category
                   usecase
                   release
                 }
               }
             }
           }
         }
       `;

export default Scanner;
