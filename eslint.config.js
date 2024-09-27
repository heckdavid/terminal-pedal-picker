import js from '@eslint/js';
import tjwBase from 'eslint-config-tjw-base';

export default [
  js.configs.recommended,
  tjwBase,
  {
    // project specific settings
  }
];
