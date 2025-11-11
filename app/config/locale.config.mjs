// Locale configuration shared between Nuxt and Edge wrapper
// This is an .mjs file so it can be imported by both TypeScript and the Worker wrapper

export const DEFAULT_LOCALE = {
  code: 'en',
  iso: 'en-US',
  name: 'International',
  file: 'en.json',
  flag: 'i-lucide:globe',
  currency: 'USD',
  currencySymbol: '$',
  uses12HourFormat: true,
  dateTimeSeparator: 'at'
};

export const LOCALES = [
  DEFAULT_LOCALE,
  {
    code: 'me',
    iso: 'sr-ME',
    name: 'MNE and region',
    file: 'me.json',
    flag: 'i-circle-flags:me',
    currency: 'EUR',
    currencySymbol: '€',
    uses12HourFormat: false,
    dateTimeSeparator: 'u'
  }
];

export const LOCALE_STRATEGY = 'prefix_except_default';

export const VALID_LOCALES = ['en', 'me'];

export const COUNTRY_TO_LOCALE_MAP = {
  // Balkan region → Montenegro locale
  'ME': 'me',  // Montenegro
  'RS': 'me',  // Serbia
  'BA': 'me',  // Bosnia and Herzegovina
  'HR': 'me',  // Croatia

  // All other countries default to 'en' (handled by fallback logic)
};