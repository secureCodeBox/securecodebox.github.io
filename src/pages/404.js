import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {

    return (
      <Layout bodyClass="page-404">
          <div className="circles">
            <p>
              404
              <br />
              <small>PAGE NOT FOUND</small>
            </p>
            <span className="circle big" />
            <span className="circle med" />
            <span className="circle small" />
          </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
