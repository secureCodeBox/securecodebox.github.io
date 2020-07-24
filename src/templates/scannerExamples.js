import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ScannerExamples = props => {
  const path = `${props.path.substring(13)}/`;
  const examples = props.data.examples.nodes;
  const targets = [];

  examples.forEach(example => {
    if (!targets.includes(example.fields.scanTarget)) {
      targets.push(example.fields.scanTarget);
    }
  });

  return (
    <Layout bodyClass="integration">
      <div className="container-fluid">
        <div id="content">
          <h1 className="title">Examples for {path.split('/')[2]}</h1>

          <Tabs>
            <TabList>
              {targets.map(target => (<Tab key={target}>{target}</Tab>))}
            </TabList>
            {targets.map(target => (<TabPanel key={target}>
              <Tabs>
                <TabList>
                  {examples.filter(example => example.fields.scanTarget === target).map((example, index) => (
                    <Tab key={index}>{example.fields.fileName}</Tab>
                  ))}
                </TabList>

                {examples.filter(example => example.fields.scanTarget === target).map((example, index) => (
                  <TabPanel key={index}>
                    <pre><code>{example.fields.content}</code></pre>
                  </TabPanel>
                ))}
              </Tabs>
            </TabPanel>))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query($basePath: String!) {
    examples: allFile(filter: {absolutePath: {regex: $basePath}, extension: {eq: "yaml"}}) {
        edges {
          node {
            base
            relativeDirectory
          }
        }
        nodes {
          fields {
            content
            fileName
            scanTarget
          }
        }
      }
  }
`;

export default ScannerExamples;
