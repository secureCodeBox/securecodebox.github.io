import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

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
  });

  return (
    <nav className="sidebar">
      {categories.map(({ categoryName, entries }) => (
        <Fragment key={categoryName}>
          <button
            onClick={() =>
              selectCategory(
                selectedCategory === categoryName ? null : categoryName
              )
            }
            className="sidebar-category"
          >
            {categoryName}
            <IoIosArrowDown
              className="arrow"
              style={{
                display: selectedCategory === categoryName ? 'block' : 'none',
              }}
            />
            <IoIosArrowForward
              className="arrow"
              style={{
                display: selectedCategory === categoryName ? 'none' : 'block',
              }}
            />
          </button>
          <ul
            id={categoryName}
            name="Category"
            className="list-unstyled components show"
            style={{
              display: selectedCategory === categoryName ? 'block' : 'none',
            }}
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
        </Fragment>
      ))}
    </nav>
  );
};

export default Sidebar;
