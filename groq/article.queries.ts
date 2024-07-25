import groq from 'groq';

const localized = (field: string) => `
select(
  $lang == "en" => ${field}.en,
  $lang == "fr" => ${field}.fr,
)
`;
export const SanityBlogArticleQuery = groq`
*[_type == 'article' && slug.current == $slug][0] {
  _id,
  "publicationDate": _createdAt,
  "title": ${localized('title')},
  "slug": slug.current,
  "summary": ${localized('summary')},
  modules[] {
    _type == 'module.textBlock' => {
        _key,
        _type,
        "subTitle": ${localized('subTitle')},
        "title": ${localized('title')},
        "body": ${localized('body')},
        image
    },
    _type == 'module.textImageBlock' => {
        _key,
        _type,
        "title": ${localized('title')},
        "body": ${localized('body')},
    }
  }
}
`;
