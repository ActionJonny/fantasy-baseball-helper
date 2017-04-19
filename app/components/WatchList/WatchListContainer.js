import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WatchList from './WatchList.js'

const mapStateToProps = (state) => {
  return { watchlist: state.watchlist }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
