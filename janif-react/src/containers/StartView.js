import { connect } from 'react-redux';
import Start from '../components/Views/Start';
import { } from '../actions/actions';

function mapStateToProps(state) {
  return {players: state.players}
}

function mapDispatchToProps(dispatch) {
  return {}
}

const StartView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);

export default StartView;
