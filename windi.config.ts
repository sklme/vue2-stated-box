import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  preflight: false,
  attributify: true,
  shortcuts: {
    'absolute-center':
      'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center text-center',
  },
});
