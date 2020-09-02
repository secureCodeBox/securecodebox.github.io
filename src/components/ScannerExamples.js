import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Collapsible from "./Collapsible";

export default function ScannerExamples({ examples, descriptions = [] }) {
  return (
    <div className="container-fluid">
      <h2 className="title">Examples</h2>

      {examples.map(({ name, description, scan, findings }) => {
        return (
          <Tabs key={name}>
            <Collapsible
              overflowWhenOpen="visible"
              lazyRender={true}
              transitionTime={150}
              transitionCloseTime={50}
              trigger={name}
              triggerTagName="h3"
            >
              {description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></div>
              )}
              <TabList>
                {scan && <Tab key={"scan"}>Scan</Tab>}
                {findings && <Tab key={"findings"}>Findings</Tab>}
              </TabList>
              {scan && (
                <TabPanel key={"scan"}>
                  <deckgo-highlight-code theme="cobalt">
                    <code slot="code">{scan}</code>
                  </deckgo-highlight-code>
                </TabPanel>
              )}
              {findings && (
                <TabPanel key={"findings"}>
                  <deckgo-highlight-code theme="cobalt">
                    <code slot="code">{findings}</code>
                  </deckgo-highlight-code>
                </TabPanel>
              )}
            </Collapsible>
          </Tabs>
        );
      })}
    </div>
  );
}
