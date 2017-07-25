import { connect } from 'react-redux';
import Main from '../components/Views/Main';
import { useBanana, useBean } from '../actions/actions';

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
    }
  }
}

const MainView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainView;
