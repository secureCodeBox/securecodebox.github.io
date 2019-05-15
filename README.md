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

## CI/CD  Build Infrastructure
- Prod Server (Rancher 1.6): https://security.iteratec.de:8443/env/1a5/apps/stacks/1st186/services/1s789/containers
- Build Server (Bamboo): https://bamboo.iteratec.io/browse/SB-SCBIO
- Artifact Server (Artifactory): 

Each commit to the master repo results in a new container, which resist at: https://artifactory.iteratec.io/artifactory/webapp/#/artifacts/browse/tree/DockerV2Info/securecodebox.docker/securecodebox/website/latest
If you want to update the production Website http://www.secureCodeBox.io you need to manualy press the Upgrade button here: https://security.iteratec.de:8443/env/1a5/apps/stacks/1st186/services/1s789/containers
- This step is not automated because there is no review process in place yet (master / develop branch with pull requests)