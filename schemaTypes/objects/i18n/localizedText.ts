import { defineType } from 'sanity';
import { supportedLanguages } from './i18n.config';

export default defineType({
  title: 'Localized text',
  name: 'localizedText',
  type: 'object',
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    validation: Rule => Rule.required(),
  })),
  options: {
    collapsible: false,
  },
});
