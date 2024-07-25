import { TextIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  name: 'module.objectBlock',
  title: 'Text Block',
  type: 'object',
  icon: TextIcon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'localizedString',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  },
});
