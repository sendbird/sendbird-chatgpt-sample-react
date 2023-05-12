import '@sendbird/uikit-react/dist/index.css'

import { useState } from 'react'
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import ChannelList from '@sendbird/uikit-react/ChannelList'
import Channel from '@sendbird/uikit-react/Channel'

import { appId, nickname, userId } from './consts'
import { ChannelSettings } from '@sendbird/uikit-react'

export default function Chat() {
  const [currentChannelUrl, setCurrentChannelUrl] = useState<string>('')
  const [showSettings, setShowSettings] = useState<boolean>(false)
  return (
    <SendbirdProvider appId={appId} userId={userId} nickname={nickname}>
      <div id='sendbird-chatgpt-demo'>
        <div id='sendbird-chatgpt-demo__channel-list'>
          <ChannelList
            onChannelSelect={(channel) => {
              setCurrentChannelUrl(channel?.url)
            }}
          />
        </div>
        <div id='sendbird-chatgpt-demo__channel'>
          <Channel channelUrl={currentChannelUrl} />
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
