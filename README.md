# numerology-core
* numerology application prototype 
* application specific code

## developer machine setup
### mac operating system
* open the terminal
* install [nvm], [node], [npm], [yarn] using the following commands:
```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bash_profile
nvm install v7.5.0
npm install -g npm
npm install -g yarn
```

## install
```bash
git clone https://github.com/cleancodedojo/numerology-core.git
cd numerology-core
yarn
```

## test
```bash
npm test
```

## automatic test
```bash
npm run test-auto
```

## build
```bash
npm run build
```

## usage
```js
import Numerology from "numerology-core";
let numerology = new Numerology();
let name = "Thomas Edison";
numerology.getDestinyNumber(name);
```

## technologies
* javascript
* es6 + babel
* mocha + chai
* nvm + node + npm + yarn
* gulp

## license
MIT

## team
* [Ray Joseph de Castro]. Software Architect.

## references
* jordan, juno. numerology. the romance in your name.

[nvm]: https://github.com/creationix/nvm#install-script
[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[Ray Joseph de Castro]: https://github.com/raydecastro/