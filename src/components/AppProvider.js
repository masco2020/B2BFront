import React from 'react'
import produce from 'immer'
import API from 'components/API'
import merge from 'lodash/merge'

const api = new API()

const DEFAULT_STATE = {
  app: {
    loading: true,
  },
  user: null,
  data: {},
  empresa: {},
}

const Context = React.createContext(DEFAULT_STATE)

export const connect = (mapContextToProps = data => data) =>
  function Wrapper(Child) {
    function ConnectContext(props) {
      const { forwardedRef, ...rest } = props
      return (
        <Context.Consumer>
          {context => (
            <Child
              ref={forwardedRef}
              {...mapContextToProps(context, rest)}
              {...rest}
            />
          )}
        </Context.Consumer>
      )
    }

    // eslint-disable-next-line react/display-name
    return React.forwardRef((props, ref) => (
      <ConnectContext {...props} forwardedRef={ref} />
    ))
  }

export class AppProvider extends React.Component {
  state = DEFAULT_STATE

  setContext = (data, cb) => {
    this.setState(data, cb)
  }

  /**
   * @typedef {Object} Action
   * @property {string} type
   * @property {*} payload
   */

  /**
   * Modifica state de AppProvider
   * @memberof AppProvider
   * @param {Action} action
   */
  dispatch = ({ type, payload }) => {
    switch (type) {
      case 'APP_LOADING':
        return this.setState(
          produce(draft => {
            draft.app.loading = payload
          })
        )
      case 'LOGIN':
        return this.setState(
          produce(draft => {
            draft.user = payload
          })
        )
      case 'LOGOUT':
        return this.setState(
          produce(draft => {
            draft.user = null
          })
        )
      case 'UPDATE_DATA':
        return this.setState(
          produce(draft => {
            draft.data = payload
          })
        )
      case 'SET_EMPRESA':
        return this.setState(
          produce(draft => {
            draft.empresa = payload
          })
        )
      case 'UPDATE_EMPRESA':
        return this.setState(
          produce(draft => {
            draft.empresa = merge(draft.empresa, payload)
          })
        )
      default:
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          context: this.state,
          setContext: this.setContext,
          dispatch: this.dispatch,
          api,
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default AppProvider
