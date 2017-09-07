import { connect } from 'react-redux';
import Main from '../components/Views/Main';
import { useBanana, useBean, gotoView } from '../actions/actions';

function mapStateToProps(state) {
  return {players: state.players}
}

function mapDispatchToProps(dispatch) {
  return {
    onBanana: (id) => {
      dispatch(useBanana(id))
    },
    onBean: (id) => {
      dispatch(useBean(id))
    },
    gotoView: (view, header) => {
      dispatch(gotoView(view, header))
    }
  }
}

const MainView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainView;
