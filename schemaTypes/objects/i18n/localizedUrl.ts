import { defineType } from 'sanity';
import { supportedLanguages } from './i18n.config';

export default defineType({
  title: 'Localized url',
  name: 'localizedUrl',
  type: 'object',
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'url',
    validation: Rule =>
      Rule.required().uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
        allowRelative: true,
      }),
  })),
  options: {
    collapsible: false,
  },
});
