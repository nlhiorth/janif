import { connect } from 'react-redux';
import Summary from '../components/Views/Summary';
import { addScore, gotoView, clearScoring } from '../actions/actions';

function mapStateToProps(state) {
  return {
    players: state.players,
    index: state.scoring.index,
    rounds: state.scoring.rounds
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addScore: (id, points) => {
      dispatch(addScore(id, points))
    },
    gotoView: (view) => {
      dispatch(gotoView(view))
    },
    clearScoring: () => {
      dispatch(clearScoring())
    }
  }
}

const SummaryView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);

export default SummaryView;
