// @flow

import React from 'react'

type Props = {
  increaseFocusedMilestoneFn: () => void,
  selectNextTrackFn: () => void,
  decreaseFocusedMilestoneFn: () => void,
  setFocusedMilestoneFn: (milestone: number) => void,
  selectPrevTrackFn: () => void
}

class KeyboardListener extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e)) // TK unlisten
  }

  handleKeyDown(e: KeyboardEvent) {
    switch(e.code) {
      case 'ArrowUp':
        this.props.increaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowRight':
        this.props.selectNextTrackFn()
        e.preventDefault()
        break
      case 'ArrowDown':
        this.props.decreaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowLeft':
        this.props.selectPrevTrackFn()
        e.preventDefault()
        break
      case 'Digit0':
        this.props.setFocusedMilestoneFn(0)
        break
      case 'Digit1':
        this.props.setFocusedMilestoneFn(1)
        break
      case 'Digit2':
        this.props.setFocusedMilestoneFn(2)
        break
      case 'Digit3':
        this.props.setFocusedMilestoneFn(3)
        break
      case 'Digit4':
        this.props.setFocusedMilestoneFn(4)
        break
      case 'Digit5':
        this.props.setFocusedMilestoneFn(5)
        break
    }
  }

  render() {
    return null
  }

}

export default KeyboardListener
