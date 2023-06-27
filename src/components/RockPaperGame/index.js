import {Component} from 'react'
import PopUp from '../PopUp/index'
import GameButton from '../ButtonItem/index'

import {
  Container,
  ScoreContainer,
  Para,
  ScoreCard,
  Score,
  GameCardContainer,
  TopContainer,
  Image,
  Button,
} from './styledComponents'

class RockPaper extends Component {
  state = {showGameCard: true, MyChoice: '', score: 0, result: ''}

  play = item => {
    const {choicesList} = this.props

    const random = Math.ceil(Math.random() * choicesList.length) - 1
    const randomObject = choicesList[random]

    this.setState(
      {
        MyChoice: item,
        random: randomObject,
        showGameCard: false,
      },
      this.resultWord,
    )
  }

  resultWord = () => {
    const {MyChoice, random} = this.state
    if (MyChoice.id === 'SCISSORS' && random.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
    if (MyChoice.id === 'SCISSORS' && random.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    }
    if (MyChoice.id === 'ROCK' && random.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
    if (MyChoice.id === 'ROCK' && random.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    }
    if (MyChoice.id === 'PAPER' && random.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
    if (MyChoice.id === 'PAPER' && random.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    }
    if (MyChoice.id === 'PAPER' && random.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
    if (MyChoice.id === 'ROCK' && random.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
    if (MyChoice.id === 'SCISSORS' && random.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    }
  }

  RenderGameCard = () => {
    const {choicesList} = this.props

    return (
      <GameCardContainer>
        {choicesList.map(eachItem => (
          <GameButton key={eachItem.id} click={this.play} item={eachItem} />
        ))}
      </GameCardContainer>
    )
  }

  result = () => {
    this.setState({
      showGameCard: true,
    })
  }

  RenderResult = () => {
    const {MyChoice, random, result} = this.state

    return (
      <>
        <GameCardContainer>
          <TopContainer>
            <GameCardContainer>
              <Para>You</Para>
              <Image src={MyChoice.imageUrl} alt="your choice" />
            </GameCardContainer>
            <GameCardContainer>
              <Para>Opponent</Para>
              <Image src={random.imageUrl} alt="opponent choice" />
            </GameCardContainer>
          </TopContainer>
        </GameCardContainer>
        <Para>{result}</Para>
        <Button type="submit" onClick={this.result} data-testid="rockButton">
          PLAY AGAIN
        </Button>
      </>
    )
  }

  render() {
    const {showGameCard, score} = this.state

    return (
      <Container>
        <ScoreContainer>
          <div>
            <h1>Rock Paper Scissors</h1>
          </div>
          <div>
            <ScoreCard>
              <Score>Score</Score>
              <Score>{score}</Score>
            </ScoreCard>
          </div>
        </ScoreContainer>
        {showGameCard ? this.RenderGameCard() : this.RenderResult()}
        <PopUp />
      </Container>
    )
  }
}

export default RockPaper
