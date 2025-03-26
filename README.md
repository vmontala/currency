# Currency exchange
Playground app using Vue and TypeScript, fetches currencies and exchange rates from the [Exchange Rates API](https://exchangeratesapi.io/)

## Installation
1. Clone the repository
1. Install the dependencies (`yarn` or `npm install`)
1. Rename the `.env.sample` file to `.env` and follow the steps in there
1. Run the application `yarn dev` or `npm run dev` (development mode) or `yarn build && yarn preview` or `npm run build && npm run preview` (production mode)

## Decisions
- Native `CSS` instead of any `SCSS` solution: I miss creating my own mixins, utility functions and a bit more readable nexting, however it still allows to follow a semi-BEM approach with unique class names and high specificity
- Custom styles instead of a third party UI library: I preferred to go for custom styles as I wanted to keep the UI simple
- Using a state management: although this could have been easily implemented using composables, I decided to go for pinia as it's easier to scale

## Challenges
- Exchange Rates API: from having to register, only accepting the non-standard `JSONP` and not all endpoints being available on the free version (which is not very explicit), by far not ideal
- Application UI: although not super inspiring, I found it quite challenging to come up with a UI that's somewhat intuitive and looks okay for this, even completely scraped a couple of initial implementations

## Next steps
- Error handling: something fancier than a `window.alert` and a redirect, ideally a retry-system, checking whether the user is online, etc
- Interactive history: clicking on the previous conversions so the `from` gets pre-filled with the given data
- Accessibility: aimed to do as many things natively as possible, however some elements could use of descriptors and behaviour indicators
