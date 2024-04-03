'use client';
export const fallbackLng = 'th'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (language = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    language,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}