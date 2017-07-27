import { connect } from 'react-redux';
import Scoring from '../components/Views/Scoring';
import { roundLoss, roundWin, roundJanif, setPoints, nextPlayer, prevPlayer } from '../actions/actions';

function mapStateToProps(state) {
  return {
    scoring: state.scoring,
    players: state.players
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoss: (id) => {
      dispatch(roundLoss(id))
    },
    onWin: (id) => {
      dispatch(roundWin(id))
    },
    onJanif: (id) => {
      dispatch(roundJanif(id))
    },
    setPoints: (id, points) => {
      dispatch(setPoints(id, points))
    },
    nextPlayer: () => {
      dispatch(nextPlayer())
    },
    prevPlayer: () => {
      dispatch(prevPlayer())
    }
  }
}

const ScoringView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoring);

export default ScoringView;
