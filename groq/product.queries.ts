import groq from 'groq'

const localized = (field: string) => `
select(
  $lang == "en" => ${field}.en,
  $lang == "fr" => ${field}.fr,
)
`

export const SanityProductModulesQuery = groq`
*[_type == 'product' && slug.current == $slug][0] {
    "title": ${localized('title')},
    "slug": slug.current,
    modules[] -> {
        _type == 'module.textBlock' => {
            _type,
            "_key": ^._key,
            "title": ${localized('title')},
            "body": ${localized('body')},
        },
        _type == 'module.textImageBlock' => {
            _type,
            "_key": ^._key,
            "subTitle": ${localized('subTitle')},
            "title": ${localized('title')},
            "body": ${localized('body')},
            image
        },
    }
}`
