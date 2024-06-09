# Zerops x Node.js
This is the most bare-bones example of Node.js app running on Zerops.

![nodejs](https://github.com/zeropsio/recipe-nodejs/assets/1303561/76219b3a-a298-4b6f-b362-e06de920d5fe)

## Deploy on Zerops
You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-nodejs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

<a href="https://app.zerops.io/recipe/nodejs">
    <img width="250" alt="Deploy on Zerops" src="https://github.com/zeropsio/recipe-laravel-jetstream/assets/1303561/21cf77dd-cded-4e41-8e76-24540a809ccc">
</a>

<br/>
<br/>

## Recipe features
- Node.js running Express.js on **Zerops Node.js** service
- Zerops **PostgreSQL 16** service as database
- Utilization of Zerops built-in **environment variables** system

## Production vs. development
Base of the recipe is ready for production, the difference comes down to:

- Use highly available version of the PostgreSQL database (change ***mode*** from ***NON_HA*** to ***HA*** in recipe YAML, ***db*** service section)
- Use at least two containers for the Node.js service to achieve high reliability and resilience (add ***minContainers: 2*** in recipe YAML, ***api*** service section)

Futher things to think about when running highly available Node.js production apps:
- containers are volatite - use Zerops object storage to store your files
- use Zerops Redis (KeyDB) for caching, storing sessions and pub/sub messaging 
