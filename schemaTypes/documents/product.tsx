import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const GROUPS = [
  {
    name: 'editorial',
    title: 'Editorial',
    default: true,
  },
]

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),

    // Modules
    defineField({
      name: 'modules',
      title: 'Product modules',
      type: 'array',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
      of: [
        {type: 'reference', to: [{type: 'module.textBlock'}, {type: 'module.textImageBlock'}]},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
    },
  },
})
