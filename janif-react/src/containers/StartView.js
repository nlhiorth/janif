import { connect } from 'react-redux';
import Start from '../components/Views/Start';
import { gotoView } from '../actions/actions';

function mapStateToProps(state) {
  return {players: state.players}
}

function mapDispatchToProps(dispatch) {
  return {
    gotoView: (view, header) => {
      dispatch(gotoView(view, header))
    }
  }
}

const StartView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);

export default StartView;
