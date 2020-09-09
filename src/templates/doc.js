import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const docs = ({ data, location }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
        {/* TODO: add sidebar for navigation through the page. 
        <Sidebar
          categories={[{ categoryName: 'Scanners', entries: [] }]}
          currentPathname={location.pathname}
        /> */}
        <div id="content">
          <div className="container-fluid" id="integration-doc">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
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
  }
`;

export default docs;
