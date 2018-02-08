import { connect } from 'react-redux';
import Join from '../components/Views/Join';
import { addPlayer, gotoView, setName, newID, spectate } from '../actions/actions';

function mapStateToProps(state) {
  return {
    players: state.players
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
    },
    newID: (id) => {
      dispatch(newID(id))
    },
    spectate: () => {
      dispatch(spectate())
    }
  }
}

const JoinView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);

export default JoinView;
