# Wizz
## Run project with docker compose 
- copy environment variables for wizq-frontend and wizq-backen
- run command ```docker-compose -f docker-compose.full.yml up --build```

## Run project without docker compose
- copy environment variables for wizq-frontend and wizq-backen
- run database (your local database or using our docker compose, look at useful commands)
- run command ```npm run dev``` 
## Useful commands

Start database via Docker (you need to open it before running the command) and run cypress image

```
docker-compose up -d
```

Test (Lint, type check, back-end tests, Cypress)

```
npm t
```

Open Cypress

```
npm run cypress:open
```

Start both front-end and back-end servers

```
npm run dev
```

Generate Prisma types

```
npm run prisma:generate
```

Create DB migration

```
npm run prisma:migrate -- --name "Hello world"
```

Deploy migration (apply somebody else's migration)

```
npm run prisma:migrate:deploy
```


## Original NX README

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

### Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

### Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


