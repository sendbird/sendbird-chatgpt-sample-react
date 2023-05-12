import { useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'

import { useChannelContext } from '@sendbird/uikit-react/Channel/context'
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext'
import { GroupChannelHandler, SendbirdGroupChat } from '@sendbird/chat/groupChannel'

export default function TypingIndicator() {
  const { channelUrl } = useChannelContext()
  const store = useSendbirdStateContext()
  const sdk = store.stores.sdkStore.sdk as SendbirdGroupChat

  const [typing, setTyping] = useState<string>('')

  useEffect(() => {
    const handlerId = faker.string.uuid()
    if (sdk?.groupChannel?.addGroupChannelHandler) {
      const handler = new GroupChannelHandler()
      handler.onMessageReceived = (channel) => {
        if(channel.url === channelUrl) {
          // workaround for disable typing indicator(May 12 2023)
          // becuase server is not sending typing status properly
          // we only have bot in this demo,
          // so we can assume that the bot has stopped typing
          // if we receive a message from the bot
          setTyping('')
        }
      }
      handler.onTypingStatusUpdated = (channel) => {
        if(channel.url === channelUrl) {
          const members = channel.getTypingUsers()
          setTyping(members[0]?.nickname || '')
        }
      }
      sdk?.groupChannel?.addGroupChannelHandler(handlerId, handler)
    }
    return () => {
      try {
        sdk?.groupChannel?.removeGroupChannelHandler(handlerId)
      } catch (error) {
        console.log(error)
      }
    }
  }, [channelUrl, sdk])
  return (typing)
    ? (
      <div>
        {typing} is typing...
      </div>
    )
    : null
}
