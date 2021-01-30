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

// getPartialStore 「获取数据」获取部分 store 映射到当前组件的 this.props中
function getPartialStore(state) {
  return {
    number: state.number
  }
}

// actionCreator 「发送事件」表示你的 action 通过一个函数返回的对象获取
const actionCreator = {
  add: () => {
    return { type: 'add', payload: 1 }
  },
  back: () => {
    return { type: 'back', payload: 1 }
  }
}

export default connect(getPartialStore, actionCreator)(Box);
