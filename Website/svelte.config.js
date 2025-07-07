import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/KWK-DataScience-Challenge'; 

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base
    }
  },
  preprocess: vitePreprocess()
};