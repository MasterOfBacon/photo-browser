import React, { FunctionComponent } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import Navigation from './Navigation'

const Layout: FunctionComponent = (props) => {
  const children = props.children
  return (
      <div className="App">
        <Navigation />
            {children}
      </div>
  )
}

export default connect()(Layout)
