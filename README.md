# Fox Next.js Starter
This is a starter package using Next.js and Tailwind

## How to use

`yarn dev`

Starts the development server.

`yarn build`

Builds the app for production.

`yarn start`

Runs the built app in production mode.

`yarn lint`

Runs the linting checks for Javascript and CSS

## File structure

```sh
root                      # → Root of the project
├── components/           # → All components are stored here in individual folders with CSS module files
│   ├── index.js          # → All component exports are included here to keep imports tidier
│   └── Component/        # → Each component folder will include at least the component js, a css file (if required) and an index.js export file
├── node_modules/         # → Node.js packages (never edit)
├── pages/                # → Individual pages are created in here and rendered by nextjs
├── public/               # → All publicly accessible files, such as images, robots.txt etc
│   └── images/           # → Use this folder to store images. Create new folders for each component. Use [next/image](https://nextjs.org/docs/api-reference/next/image) to load images.
├── styles/               # → This is mainly used to import the Tailwind CSS and any other global styles
├── .eslint.json          # → ES Lint configuration
├── .gitignore            # → Ignore these files in Git
├── package.json          # → Node.js dependencies and scripts
├── postcss.config.js     # → PostCSS config file
└── tailwind.config.js    # → Tailwind config file
```

## Style guide

All code to use 2 spaces indentation.

### Javascript

Javascript linting is handled by eslint. Run `yarn lint:js` to check your Javascript code formatting. The project is following these [React best practices](https://www.npmjs.com/package/eslint-plugin-react#recommended).

### CSS

CSS linting is handled by stylelint. Run `yarn lint:css` to check your CSS formatting. The project is following these [Standard CSS Rules](https://github.com/stylelint/stylelint-config-standard).

## Workflow

This project uses the typical [Github Flow](https://guides.github.com/introduction/flow/). 

1. Pull the latest changes from the `main` branch
2. Create a new branch named using the following format (`#issueno-descriptionofwork`)
3. Make changes to branch on local
4. Create a pull request
5. Review code and make amends
6. Merge with `main` branch
7. When current milestone completed push to `production` branch

## Notes

This package includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes

To control the generated stylesheet's filesize, this package uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
