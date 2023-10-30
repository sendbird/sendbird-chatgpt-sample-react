import '@sendbird/uikit-react/dist/index.css'

import './App.css'
import './disabled-features.css'

import App from '@sendbird/uikit-react/App'
import { appId, nickname, userId } from './consts'

export default function Chat() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <App
      appId={appId}
      userId={userId}
      nickname={nickname}
      isVoiceMessageEnabled={true}
      isMentionEnabled={true}
      breakpoint={isMobile}
      showSearchIcon={true}
      replyType="THREAD"
    />
  )
}
