import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {Button, PopupContainer, RulesContainer, Image} from './styledComponents'

const PopUp = () => (
  <PopupContainer>
    <Popup modal trigger={<Button>RULES</Button>}>
      {close => (
        <>
          <RulesContainer>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine />
            </button>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
              alt="rules"
            />
          </RulesContainer>
        </>
      )}
    </Popup>
  </PopupContainer>
)

export default PopUp
