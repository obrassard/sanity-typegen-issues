import { InlineIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'module.textImageBlock',
  title: 'Text with image',
  type: 'document',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'localizedString',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sur-titre',
      type: 'localizedString',
      description: 'Texte affiché au dessus du titre (optionnel)',
    }),
    defineField({
      name: 'body',
      title: 'Corps',
      type: 'localizedText',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      internalName: 'internalName',
      body: 'body',
      media: 'image',
    },
    prepare({ title, internalName, body, media }) {
      return {
        title: internalName ? internalName : title.fr,
        subtitle: internalName ? title.fr : title.en,
        description: body.fr,
        media,
      };
    },
  },
});
