import { TextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'module.textBlock',
  title: 'Text Block',
  type: 'document',
  icon: TextIcon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'localizedString',
      validation: Rule => Rule.required(),
    },
    defineField({
      name: 'body',
      title: 'Corps',
      type: 'localizedText',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      internalName: 'internalName',
      body: 'body',
    },
    prepare({ title, internalName, body }) {
      return {
        title: internalName ? internalName : title.fr,
        subtitle: internalName ? title.fr : title.en,
        description: body.fr,
      };
    },
  },
});
