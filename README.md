# LandingPage secureCodeBox

This repository sources the [secureCodeBox landing page](https://www.securecodebox.io/).

The actual content of the static site is in `src/www/`. In `contrib/` is an example template.

## Build and Run

```bash
docker image build -t landing-page .
docker container run -p 8080:80 --rm -d landing-page
```

And then visit [this](http://localhost:8080/) in your browser.

## Simple Local Server

If you have Python installed you can simply use it's simple HTP server:

```bash
cd src/www
python -m SimpleHTTPServer 8080
```
