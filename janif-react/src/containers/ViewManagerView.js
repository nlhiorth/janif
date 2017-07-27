import { connect } from 'react-redux';
import ViewManager from '../components/ViewManager';
import { gotoView } from '../actions/actions';

function mapStateToProps(state) {
  return {
    curview: state.game.curview,
    header: state.game.header
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gotoView: (view, header) => {
      dispatch(gotoView(view, header))
    }
  }
}

const ViewManagerView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewManager);

export default ViewManagerView;
