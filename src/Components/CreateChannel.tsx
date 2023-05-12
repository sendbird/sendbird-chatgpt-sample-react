import sendBirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import Modal from '@sendbird/uikit-react/ui/Modal'
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext'

import { BOTS, userId } from '../consts';
import botIcon from '../assets/icon-menu-bot.svg'

type Props = {
  onCancel: () => void
}

export default function CreateChannel({ onCancel }: Props) {
  const store = useSendbirdStateContext();
  const createChannel = sendBirdSelectors.getCreateGroupChannel(store);
  return (
    <Modal
      // @ts-expect-error need to fix type in uikit
      titleText='New Channel'
      hideFooter
      onCancel={onCancel}
      className="sendbird-add-channel__modal"
    >
      <>
        {
          Object.keys(BOTS).map((botId_) => {
            const botId = botId_ as keyof typeof BOTS;
            const botName = BOTS[botId];
            return (
              <a
                key={botId}
                className='sendbird-add-channel__rectangle'
                onClick={() => {
                  createChannel({
                    isDistinct: true,
                    invitedUserIds: [botId, userId],
                    operatorUserIds: [userId],
                  }).finally(() => {
                    onCancel();
                  });
                }}
              >
                <img src={botIcon} alt={botName} className='sendbird-icon' />
                <p className='sendbird-add-channel__bot-name'>{botName}</p>
              </a>
            );
            }
          )
        }
      </>
    </Modal>
  )
}