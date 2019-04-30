# LandingPage secureCodeBox

This repository sources the [secureCodeBox landing page](https://www.securecodebox.io/).

The actual content of the static site is in `src/www/`. In `contrib/` is an example template.

## Build and Run

```bash
docker image build -t landing-page .
docker container run -p 8080:80 --rm -d landing-page
```

And then visit [this](http://localhost:8080/) in your browser.

**NOTE**: If the Nginx complains about permissions you need to check that `src/www` has the access rights `a+rX`.
