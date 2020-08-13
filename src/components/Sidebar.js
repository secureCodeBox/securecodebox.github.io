import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// Determine the naming of Sidebar categories
function getCategoryTitle(category) {
  let categoryTitle = '';

  switch (category[0].node.frontmatter.category) {
    case 'scanner':
      categoryTitle = 'Scanners';
      break;

    case 'hook':
        category[0].node.frontmatter.type === 'persistenceProvider' ? categoryTitle = 'Persistence Providers' : categoryTitle = 'Hooks';
      break;

    default:
        categoryTitle = 'Unknown Category';
      break;
  }

  return categoryTitle;
}

const Sidebar = (props) => {
  return (
    <nav className="sidebar">
      {props.dataArray.map((category, index) => (
        <Fragment key={index}>
          <h1 className="sidebar-header">{getCategoryTitle(category)}</h1>
          <ul className="list-unstyled components">
            {category.map((element) => (
              <li key={element.node.frontmatter.title}>
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
