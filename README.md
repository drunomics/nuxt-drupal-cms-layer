# Nuxt Drupal CMS Layer

Nuxt layer for providing components for integrating the Drupal CMS with Lupus Decoupled.

* https://www.drupal.org/project/cms
* https://lupus-decoupled.org

The layer consist of multiple sub-layers for the respective drupal-cms recipes,
e.g. 
 * layers/blog - For [Lupus Decoupled Blog](https://www.drupal.org/project/lupus_decoupled_blog)
* layers/news - For [Lupus Decoupled News](https://www.drupal.org/project/lupus_decoupled_news)

All layers are automatically added when the main CMS layer is added.

## Usage

Todo. 

See https://www.drupal.org/project/lupus_decoupled/issues/3506988


## Development

### Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Working on your layer

Your layer is at the root of this repository, it is exactly like a regular Nuxt project, except you can publish it on NPM.

The `.playground` directory should help you on trying your layer during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your layer itself.


### Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

