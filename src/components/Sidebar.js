import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// Toggles sidebar menus, only one may be open at a time
function toggleMenu(id) {
  const element = document.getElementById(id);

  const scanners = document.getElementById('Scanners');
  const persistenceProviders = document.getElementById('Persistence Providers');
  const hooks = document.getElementById('Hooks');

  if (element !== scanners) {
    scanners.style.display = 'none';
  }
  if (element !== persistenceProviders) {
    persistenceProviders.style.display = 'none';
  }
  if (element !== hooks) {
    hooks.style.display = 'none';
  }

  element.style.display === 'block'
    ? (element.style.display = 'none')
    : (element.style.display = 'block');
}

// Determine the naming of Sidebar categories
function getCategoryTitle(category) {
  let categoryTitle = '';

  switch (category[0].node.frontmatter.category) {
    case 'scanner':
      categoryTitle = 'Scanners';
      break;

    case 'hook':
      category[0].node.frontmatter.type === 'persistenceProvider'
        ? (categoryTitle = 'Persistence Providers')
        : (categoryTitle = 'Hooks');
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
          <h1
            onClick={() => toggleMenu(getCategoryTitle(category))}
            className="sidebar-header"
          >
            {getCategoryTitle(category)}
          </h1>
          <ul
            id={getCategoryTitle(category)}
            className="list-unstyled components show"
          >
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
