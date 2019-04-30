# LandingPage secureCodeBox

This repository sources the [secureCodeBox landing page](https://www.securecodebox.io/).

## Build and Run

```bash
docker image build -t landing-page .
docker container run -p 8080:80 --rm -d landing-page
```

And then visit [this](http://localhost:8080/) in your browser.
