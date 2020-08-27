import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout";

const TelemetryPage = (props) => {
  const html = props.data.markdownRemark.html;
  return (
    <Layout bodyClass="page-telemetry">
      <SEO title="Telemetry" />
      <div id="content">
        <div className="container" id="integration-doc">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Telemetry {
    markdownRemark(
      fileAbsolutePath: { regex: "/src/pages/telemetry/telemetry/" }
    ) {
      html
    }
  }
`;

export default TelemetryPage;
