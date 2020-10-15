import React from 'react'
import {connect} from 'react-redux'
import {CodeEditor} from './CodeEditor'
import Typed from 'react-typed'

const FakeTerminal = props => {
  return (
    <div>
      <div id="text-editor-wrap">
        <div className="title-bar">
          <span className="title">🔒Confidential-File - bash - 80x24</span>
        </div>
        <div className="text-body">
          ${' '}
          {props.allQs.length &&
            props.state.showQuestion && (
              <Typed
                strings={[props.allQs[props.state.idx].prompt]}
                typeSpeed={40}
              />
            )}
          {props.allQs.length &&
            props.state.showPrompt && (
              <Typed
                strings={[props.allQs[props.state.idx].plotQuestion]}
                typeSpeed={40}
              />
            )}
        </div>
        <CodeEditor
          code={props.state.code}
          options={props.options}
          updateCode={props.updateCode}
          formatQuery={props.formatQuery}
          createTable={props.createTable}
          handleQuery={props.handleQuery}
        />
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    question: state.question.currentQ,
    allQs: state.question.allQs
  }
}

export default connect(mapState)(FakeTerminal)
