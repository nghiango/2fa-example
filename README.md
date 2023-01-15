# Project

2FA project to evaluate front-end engineer

## Setup and running

Install all dependencies by command 
```
npm install
```
Run project by command
```
npm start
```

## Libs
Some main libraries are used in the project
- [mobX](https://mobx.js.org/)
- [react hook form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [react router dom](https://reactrouter.com/en/main)
- [craco](https://www.npmjs.com/package/@craco/craco)

## Structure
```
.
├── README.md
├── src
│   ├── App.scss
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── assets
│   │   └── images
│   │       └── ...
│   ├── common
│   │   ├── ...
│   │   ├── CommonComponent.scss
│   │   └── CommonComponent.tsx
│   ├── pages
│   │   ├── ...
│   │   ├── PageComponent
│   │   │   ├── PageComponent.scss
│   │   │   ├── PageComponent.tsx
│   │   │   └── components
│   │   │       ├── ComponentInPage.scss
│   │   │       └── ComponentInPage.tsx
│   │   └── index.tsx
│   ├── router.tsx
│   └── stores
│       ├── index.tsx
│       └── store.ts
├── craco.config.js
├── tsconfig.base.json
└── tsconfig.json
```

## Project notes
- To configure alias of import, you need to edit both files `craco.config.js` and `tsconfig.base.json`.
- To add new store, you need to add your store into folder `stores` and update `index.tsx` file.
- To add new route, you need to change `router.tsx` file.
- All images must be stored into `assets/images` folder.
- Common component need to place in `common` folder.
- Page component need to place in `pages` folder.
- All components should use `className` for styling purposes, and thus it also requires `scss` file which follows [BEM rule](https://getbem.com/).
- Using [react hook form](https://react-hook-form.com/) to control form.
- Using [Yup](https://github.com/jquense/yup) combines with [react hook form](https://react-hook-form.com/) to control and validate form.
