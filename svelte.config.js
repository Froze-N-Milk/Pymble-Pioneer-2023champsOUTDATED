import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
 
export default {
  preprocess: preprocess(),

  

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true,
      paths: {
        base: "/froze-n-milk.github.io/Pymble-Pioneer"
      },
    })
  }
};