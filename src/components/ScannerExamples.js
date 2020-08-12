import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PREFIX = 23
export default function ScannerExamples(props) {

    console.log(props.scanner);

    const scanner = props.scanner.substring(PREFIX);
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
    const targets = [];
    const examples = [];

    const length = data.examples.edges.length
    let i;
    for (i = 0; i < length; i++) {
        const edge = data.examples.edges[i];
        const node = data.examples.nodes[i];
        if (edge.node.relativeDirectory.includes(scanner)) {
            const target = data.examples.nodes[i].fields.scanTarget
            if(!targets.includes(target))
                targets.push(target);
            examples.push(node);
        }
    }

    return (
        <div className="container-fluid">
            <h2 className="title">Examples</h2>
            <Tabs>
                <TabList>
                    {targets.map(target => (<Tab key={target}>{target}</Tab>))}
                </TabList>
                {targets.map(target => (<TabPanel key={target}>
                    <Tabs>
                        <TabList>
                            {/* We are reversing to ensure that the scan.yaml is shown before the findings.yaml */}
                            {examples.filter(example => example.fields.scanTarget === target).reverse().map((example, index) => (
                                <Tab key={index}>{example.fields.fileName.split(".")[0]}</Tab>
                            ))}
                        </TabList>

                        {/* We are reversing to ensure that the right text ist displayed for the right file */}
                        {examples.filter(example => example.fields.scanTarget === target).reverse().map((example, index) => (
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