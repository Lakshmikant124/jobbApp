import {Image2, ImageButton} from './styledComponent'

const GameButton = props => {
  const {item, click} = props
  const {imageUrl, id, test} = item

  const event = () => {
    click(item)
  }

  return (
    <ImageButton onClick={event} data-testid={test} type="submit">
      <Image2 src={imageUrl} alt={id} />
    </ImageButton>
  )
}

export default GameButton
