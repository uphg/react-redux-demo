import './Box.css';
import { Component } from 'react';
import { connect } from 'react-redux'

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <p className="message">
          {this.props.number}
        </p>
        <div>
          <button
            className="margin-right-10"
            onClick={() => { this.props.add() }}
          >点击加一</button>
          <button
            onClick={() => { this.props.back() }}
          >点击减一</button>
        </div>
      </div>
    )
  }
}

// mapStateToProps 获取部分 store 映射到当前组件的 this.props中
function mapStateToProps(state) {
  return {
    number: state.number
  }
}

// mapDispatchToProps 像 dispatch 触发事件并传值
function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: 'add', payload: 1 }),
    back: () => dispatch({ type: 'back', payload: 1 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
