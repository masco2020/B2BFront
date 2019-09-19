// import wrapDisplayName from 'recompose/wrapDisplayName'
import React from 'react'
import conversation from '../mockup/conversation'

const DEFAULT_STATE = {
  app: {
    conversation,
    totalMessages: 40,
    loading: false,
  },
}

const Context = React.createContext(DEFAULT_STATE)

export const connect = (mapContextToProps = data => data) =>
  function(Child) {
    function ConnectContext(props) {
      return (
        <Context.Consumer>
          {context => (
            <Child {...mapContextToProps(context, props)} {...props} />
          )}
        </Context.Consumer>
      )
    }
    // ConnectContext.displayName = wrapDisplayName(Child, 'connect')

    return ConnectContext
  }

export class AppProvider extends React.Component {
  state = DEFAULT_STATE

  setContext = (data, cb) => {
    this.setState(data, cb)
  }

  render() {
    return (
      <Context.Provider
        value={{
          context: this.state,
          setContext: this.setContext,
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default AppProvider
