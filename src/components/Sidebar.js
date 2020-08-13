import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// Toggles sidebar menus, only one may be open at a time
function toggleMenu(id) {
  const element = document.getElementById(id);
  const scanners = document.getElementById('Scanners');
  const persistenceProviders = document.getElementById('Persistence Providers');
  const hooks = document.getElementById('Hooks');

  switch (element) {
    case scanners:
      persistenceProviders.style.display = 'none';
      hooks.style.display = 'none';

      element.style.display === 'block'
        ? (element.style.display = 'none')
        : (element.style.display = 'block');
      break;

    case persistenceProviders:
      scanners.style.display = 'none';
      hooks.style.display = 'none';

      element.style.display === 'block'
        ? (element.style.display = 'none')
        : (element.style.display = 'block');
      break;

    case hooks:
      scanners.style.display = 'none';
      persistenceProviders.style.display = 'none';

      element.style.display === 'block'
        ? (element.style.display = 'none')
        : (element.style.display = 'block');
      break;

    default:
      scanners.style.display = 'none';
      persistenceProviders.style.display = 'none';
      hooks.style.display = 'none';
      break;
  }
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
