import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'OnlineSim',
        ru_RU: 'OnlineSim',
      },
    },
    {
      id: 2,
      title: {
        en: 'App',
        ru_RU: 'Test',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        ru_RU: 'Test',
      },
    },
  ]
})
