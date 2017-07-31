import { connect } from 'react-redux';
import Setup from '../components/Views/Setup';
import { addPlayer, gotoView, setName } from '../actions/actions';

function mapStateToProps(state) {
  return {
    players: state.players,
    input: state.game.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: (name) => {
      dispatch(addPlayer(name))
    },
    gotoView: (view) => {
      dispatch(gotoView(view))
    },
    setName: (input) => {
      dispatch(setName(input))
    }
  }
}

const SetupView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);

export default SetupView;
