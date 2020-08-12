import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ScannerExamples(props) {

    const scanner = 'nmap';
    const query = graphql`
            query {
                examples: allFile(filter: {base: {regex: "/^(findings|scan).yaml/"}, extension: {eq: "yaml"}}) {
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
            }`;
    const data = useStaticQuery(query);
    console.log("Results for query");
    console.log(data);
    const targets = [];
    const examples = []; 

    const length = data.examples.edges.length
    let i;
    for (i = 0; i < length; i++) {
        const edge = data.examples.edges[i];
        const node = data.examples.nodes[i];
        console.log(edge.node.relativeDirectory)
        if (edge.node.relativeDirectory.includes(scanner)) {
            const target = data.examples.nodes[i].fields.scanTarget
            if (!targets.includes(target)) {
                targets.push(target);
                examples.push(node);
            }
        }
    }

    console.log(targets);
    console.log(examples);

    return (
        <div className="container-fluid">
            <h2 className="title">Examples</h2>

            <Tabs>
                <TabList>
                    {targets.map(target => (<Tab key={target}>{target}</Tab>))}
                </TabList>
                {targets.map(target => (<TabPanel key={target}>
                    <Tabs> <TabList>
                        {examples.reverse().filter(example => example.fields.scanTarget === target).map((example, index) => (
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
    );
}