import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pitchers from './Pitchers.js'

const mapStateToProps = (state) => {
  return { pitchers: state.pitchers }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pitchers)
