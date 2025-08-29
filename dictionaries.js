import 'server-only'
 
const dictionaries = {
  no: () => import('./dictionaries/no.json').then((module) => module.default),
  nb: () => import('./dictionaries/no.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()
