import { faker } from '@faker-js/faker'

export const BOTS = {
  gpt_bot: 'Sendbird GPT Bot',
  gpt_bot2: 'Witty Bot',
  gpt_bot3: 'Sendbird Knowledge Bot',
} as const

export const userId = faker.string.uuid()
export const nickname = faker.internet.userName()

export const appId = import.meta.env.VITE_APP_ID ?? ''
