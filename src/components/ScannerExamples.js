import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Collapsible from './Collapsible';

import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';

export default function ScannerExamples({ examples: allExamples }) {
  const exampleGroups = mapValues(
    groupBy(allExamples, ({ scanTarget }) => scanTarget),
    (examples) => {
      /* We are reversing to ensure that the right text ist displayed for the right file */
      return examples.reverse();
    }
  );

  return (
    <div className="container-fluid">
      <h2 className="title">Examples</h2>

      {Object.entries(exampleGroups).map(([targetName, examples]) => {
        return (
          <Tabs key={targetName}>
            <Collapsible
              lazyRender
              transitionTime={150}
              trigger={targetName}
              triggerTagName="h3"
            >
              <TabList>
                {examples.map(({ fileName }) => (
                  <Tab key={fileName}>{fileName.split('.')[0]}</Tab>
                ))}
              </TabList>

              {examples.map(({ fileName, content }) => (
                <TabPanel key={fileName}>
                  <deckgo-highlight-code theme="cobalt">
                    <code slot="code">{content}</code>
                  </deckgo-highlight-code>
                </TabPanel>
              ))}
            </Collapsible>
          </Tabs>
        );
      })}
    </div>
  );
}
