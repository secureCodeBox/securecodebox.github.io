import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class ContactPage extends React.Component {
  state = {
    name: null,
    email: null,
  };

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    });
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    console.log('submit', this.state);

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`);

        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        console.log('err', err);
        alert(err);
      });
  };

  render() {
    return (
      <Layout bodyClass="page-contact">
        <SEO title="Contact" />
        <div class="container">
          <div className="intro pb-4">
            <div class="container">
              <h1>Contact us now!</h1>
              <p class="text-color">
                You're interested about{' '}
                <a href="https://github.com/secureCodeBox">secureCodeBox</a> or
                security in general? Subscribe our newsletter and get in touch
                with us. We'll keep you up to date.
              </p>
              <p class="text-color">
                You want hands on? Checkout our{' '}
                <a href="https://github.com/secureCodeBox/secureCodeBox">
                  Git repository
                </a>{' '}
                and spin up your own <em>secureCodeBox</em> with{' '}
                <a href="https://docs.docker.com/compose/">Docker Compose</a>.
              </p>
            </div>
          </div>

          {/* <div class="col-lg-3 col-lg-offset-3">
            <address>
              <strong>
                <span class="navy">iteratec GmbH</span>
              </strong>
              <br />
              St.-Martin-Straße 114
              <br />
              81669 München
              <br />
              Telefon: +49 89 614551-0
            </address>
          </div> */}

          <div class="form-row">
            <div class="col-lg-12 text-center">
              <form onSubmit={this._handleSubmit}>
                <div class="form-group">
                  <label for="mce-EMAIL" className="col-form-label">
                    Email address<span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    onChange={this._handleChange}
                    placeholder="email"
                    name="email"
                    className="form-control"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="form-group">
                  <label for="mce-FNAME" className="col-form-label">
                    First name<span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="first name"
                    name="fname"
                    className="form-control"
                    id="mce-FNAME"
                  />
                </div>
                <div class="form-group">
                  <label for="mce-LNAME" className="col-form-label">
                    Surname<span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="surname"
                    name="lname"
                    className="form-control"
                    id="mce-LNAME"
                  />
                </div>

                <div class="form-group">
                  <label for="mce-MESSAGE" className="col-form-label">
                    Interested in &hellip;
                  </label>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="Write your message!"
                    name="message"
                    className="form-control"
                    id="mce-MESSAGE"
                  />
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response"></div>
                  <div class="response" id="mce-success-response"></div>
                </div>
                <p class="m-t-sm">* required fields</p>

                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button-submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
