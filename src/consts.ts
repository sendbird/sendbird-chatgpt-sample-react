import { faker } from '@faker-js/faker'

export const BOTS = {
  bot_test_0a780: 'bot_test_0a780',
  gpt_bot2: 'Witty Bot',
  gpt_bot3: 'Sendbird Knowledge Bot',
} as const

export const userId = 'hoon752'; // faker.string.uuid()
export const nickname = 'hoon752'; //faker.internet.userName()
export const guestUserId = faker.string.uuid();

export const appId = import.meta.env.VITE_APP_ID ?? ''
