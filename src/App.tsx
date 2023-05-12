import '@sendbird/uikit-react/dist/index.css'

import './App.css'
import './disabled-features.css'

import { useState } from 'react'
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'

import { appId, nickname, userId } from './consts'
import { ChannelSettings } from '@sendbird/uikit-react'
import ChannelListHeader from './Components/ChannelListHeader'
import TypingIndicator from './Components/TypingIndicator'

export default function Chat() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState<string>('')
  const [showSettings, setShowSettings] = useState<boolean>(false)
  return (
    <SendbirdProvider
      appId={appId}
      userId={userId}
      nickname={nickname}
      isVoiceMessageEnabled={false}
    >
      <div id='sendbird-chatgpt-demo'>
        <div id='sendbird-chatgpt-demo__channel-list'>
          <ChannelList
            onChannelSelect={(channel) => {
              setCurrentChannelUrl(channel?.url)
            }}
            renderHeader={ChannelListHeader}
          />
        </div>
        <div id='sendbird-chatgpt-demo__channel'>
          <Channel
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => setShowSettings(!showSettings)}
            renderTypingIndicator={TypingIndicator}
          />
        </div>
        {
          showSettings && (
            <div id='sendbird-chatgpt-demo__settings'>
              <ChannelSettings
                onCloseClick={() => setShowSettings(false)}
                channelUrl={currentChannelUrl}
              />
            </div>
          )
        }
      </div>
    </SendbirdProvider>
  )
}
