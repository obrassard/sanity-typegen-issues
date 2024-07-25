import article from "./documents/article";
import textBlock from "./documents/modules/textBlock";
import textImageBlock from "./documents/modules/textImageBlock";
import product from "./documents/product";
import localizedString from "./objects/i18n/localizedString";
import localizedText from "./objects/i18n/localizedText";
import localizedUrl from "./objects/i18n/localizedUrl";

export const schemaTypes = [
    // Documents
    textBlock,
    textImageBlock,
    article,
    product,

    // Objects and fields
    localizedString,
    localizedText,
    localizedUrl,
]
