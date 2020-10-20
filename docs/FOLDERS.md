# Folders

```
.
├── README.md
├── next.config.js
├── .next/ (Compiled output from next)
├── node_modules/
├── package-lock.json
├── package.json
├── .storybook
├── storybook-static/ (Compiled output from storybook)
├── .babelrc
├── jest.config.js
├── coverage/ (Coverage report from jest)
├── docs/
└── src
    ├── pages/
    │   ├── _app.js
    │   └── _document.js
    ├── store/
    │   ├── dependencies.js (Dependencies for redux-observable epics)
    │   ├── rootEpic.js
    │   ├── rootReducer.js
    │   ├── store.js (Redux store)
    │   └── index.js (Export factor functions for create store)
    ├── styles/ (Material UI global theme)
    ├── tests/
    │   ├── setupTests.js (Jest setupFilesAfterEnv)
    │   ├── utils.js (Custom renderer with all providers)
    │   └── index.js (Export custom renderer)
    ├── utils/ (Utilities for pages)
    └── packages/
        ├── base/ (`index.js` exports base react components)
        ├── layout/ (`index.js` exports layouts)
        └── permission/ (`index.js` exports HOC for permission checking)
```

## Package folder

**Note:** Packages should be placed under `/src/packages/`.
{: .note}

```
.
├── assets/
├── components/ (`index.js` exports components which will be exported by `../index.js`)
├── containers/ (`index.js` exports containers which will be exported by `../index.js`)
├── hoc/
├── redux/
│   ├── epics.js
│   ├── slice.js (Slice created by @reduxjs/toolkit)
│   └── index.js (Export reducer, actions and epic)
├── utils/
└── index.js (Export reducer, epic and react components)
```
