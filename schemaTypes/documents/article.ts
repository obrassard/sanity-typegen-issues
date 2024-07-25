import { BlockContentIcon, BookIcon, DocumentTextIcon } from '@sanity/icons';
import { defineField } from 'sanity';

export default defineField({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'editorial',
      title: 'Editorial',
      icon: BookIcon,
    },
    {
      name: 'content',
      title: 'Content',
      icon: BlockContentIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: Rule => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'localizedText',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Page modules',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [
        { type: 'module.textBlock' },
        { type: 'module.textImageBlock' },
      ],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      coverImage: 'image',
    },
  },
});
