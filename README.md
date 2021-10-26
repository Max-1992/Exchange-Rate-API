# Exchange rate api

_This api allows you to check the rates for a specific list of currency pairs._

## Getting Starter 🚀

_These instructions will allow you to run the project on your local machine._



## Installing dependencies 🔧

_Run the following statement to install the project dependencies._

```
npm install
```

## Run project ⚙️

_To run the server locally._

```
npm start
```

## Run test suite ⚙️

_To run the test suite of the project._

```
npm run test
```

## Create coverage report ⚙️

_To create a report of the project's test suite._

```
npm run coverage
```


## Built with 🛠️

_Las herramientas utilizadas para crear este proyecto son:_

* [Node](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Hapi](https://hapi.dev/) - The Simple, Secure FrameworkDevelopers Trust
* [Awilix](https://github.com/jeffijoe/awilix#readme/) - Extremely powerful Dependency Injection (DI) container for JavaScript/Node, written in TypeScript. 
* [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
* [Fixer](https://fixer.io/) - oreign exchangerates and currency conversion JSON API

## Commit pattern

_A commit pattern is implemented to improve the development experience._

```
type:
    feat     A new feature.
    fix      A bug fix.
    docs     Documentation only changes.
    style    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    refactor A code change that neither fixes a bug nor adds a feature.
    test     Adding missing tests or correcting existing ones.
    chore    Changes to the build process or auxiliary tools and libraries such as documentation generation.
    perf     A code change that improves performance.
    ci       Changes to your CI configuration files and scripts.
    build    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    temp     Temporary commit that won't be included in your CHANGELOG.
```

## Endpoint example 📖

* http://localhost:3000//v1/rates
* http://localhost:3000/documentation#/

### Response (success)  📖
```
[
    {
        "pair": "EURUSD",
        "originalRate": 1.161002,
        "feePercentage": 2,
        "feeAmount": 0.023220039999999997,
        "rateMarkUpApplied": 1.13778196
    },
    {
        "pair": "EURARS",
        "originalRate": 115.50832,
        "feePercentage": 7,
        "feeAmount": 8.085582399999993,
        "rateMarkUpApplied": 107.4227376
    },
    {
        "pair": "EURBRL",
        "originalRate": 6.493369,
        "feePercentage": 5,
        "feeAmount": 0.3246684499999999,
        "rateMarkUpApplied": 6.1687005500000005
    },
    {
        "pair": "USDARS",
        "originalRate": 99.490198983292,
        "feePercentage": 8,
        "feeAmount": 7.959215918663361,
        "rateMarkUpApplied": 91.53098306462864
    },
    {
        "pair": "USDBRL",
        "originalRate": 5.592900787423277,
        "feePercentage": 5,
        "feeAmount": 0.2796450393711636,
        "rateMarkUpApplied": 5.313255748052113
    },
    {
        "pair": "BRLARS",
        "originalRate": 17.78865793704316,
        "feePercentage": 6,
        "feeAmount": 1.0673194762225897,
        "rateMarkUpApplied": 16.72133846082057
    }
]
```
