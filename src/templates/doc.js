import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar.js';

const docs = ({ data, location }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="integration">
      <div className="sidebar-wrapper">
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
