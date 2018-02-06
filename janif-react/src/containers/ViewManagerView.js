import { connect } from 'react-redux';
import ViewManager from '../components/ViewManager';
import { gotoView, resetState } from '../actions/actions';

function mapStateToProps(state) {
  return {
    curview: state.game.curview,
    header: state.game.header,
    gameId: state.game.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gotoView: (view, header) => {
      dispatch(gotoView(view, header))
    },
    resetState: () => {
      dispatch(resetState())
    }
  }
}

const ViewManagerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewManager);

export default ViewManagerView;
