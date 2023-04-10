# MAIN PORTFOLIO

This portfolio will showcase my work and skills as a developer. I will be using this portfolio to show my skills and work to potential employers.

## Sanity SETUP

The project is built using the following technologies:

- Sanity.io
- React.js which will later be converted to Next.js

### Getting Started

Create sanity project and install the sanity cli

```
mkdir backend-sanity
npm install -g @sanity/cli
```

Sanity.io is a CRM that allows you to create a CMS for your website. It is a headless CMS which means that it is not tied to a specific framework. It is a great tool for creating a CMS for your website.

Create a new project

```
npm create sanity@latest -- --template get-started --project 60y04dai --dataset production --provider google
```

You can use the following command to learn more about sanity

Open documentation in the browser

```
sanity docs
```

Open the studio in the browser

```
sanity start
```

Get help in the terminal

```
sanity help
```

Open project settings in the terminal

```
sanity manage
```

We create schemas and import them in the index. We can also create documents in the studio.

---

## Frontend creation using react

This frontend will be converted to next.js later on.

### Getting Started

Run this command to create a react app

```
yarn create react-app frontend
```

Once we have created the react app we can install the following dependencies

We clear unnecessary files and folders and then we add these dependencies

```
yarn add @sanity/client @sanity/image-url framer-motion node-sass react-icons
```

To connect to sanity we need to create a client. We create a client.js file in the src folder and add the following code

```
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-04-06',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

# For the images urls
export const urlFor = (source) => builder.image(source);
```

In terminal, we can run `sanity manage` to open the studio and create a new dataset. We can then create a new token and add it to the client.js file.

We need to copy the project id, dataset, allow CROSS ORIGIN for localhost:3000 and create the token and copy it to the client.js file.

The deployment is pretty much easier:

```
yarn build

```
