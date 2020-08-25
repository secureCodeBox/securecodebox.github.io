import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import Collapsible from './Collapsible';

/**
 * Interactive Sidebar with toggleable categories.
 *
 * @requires categories of form: [ { name: "foobar", entires: []} ]
 */
const Sidebar = ({ categories = [], currentPathname }) => {
  const [selectedCategory, selectCategory] = useState(() => {
    for (const { categoryName, entries } of categories) {
      for (const entry of entries) {
        if (currentPathname.includes(entry.node.frontmatter.path)) {
          return categoryName;
        }
      }
    }
    return null;
  });

  return (
    <nav className="sidebar">
      {categories.map(({ categoryName, entries }) => (
        <Fragment key={categoryName}>
          <Collapsible
            className="sidebar-category"
            openedClassName="sidebar-category"
            transitionTime={150}
            transitionCloseTime={50}
            trigger={categoryName}
            triggerTagName="div"
            open={selectedCategory === categoryName}
            onTriggerOpening={() => {
              selectCategory(
                selectedCategory === categoryName ? null : categoryName
              );
            }}
          >
            <ul
              id={categoryName}
              name="Category"
              className="list-unstyled components show"
            >
              {entries.map((element) => (
                <li
                  key={element.node.frontmatter.title}
                  className="sidebar-element"
                >
                  <Link
                    to={`/integrations/${element.node.frontmatter.path}`}
                    activeClassName="active-Link"
                  >
                    {element.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Collapsible>
        </Fragment>
      ))}
    </nav>
  );
};

export default Sidebar;
