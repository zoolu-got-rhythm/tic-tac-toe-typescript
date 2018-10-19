
import CounterStatefull from '../CounterStatefull';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


export function mapStateToProps({ currentCount }: StoreState) {
    return {
      startingCount: currentCount,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.setTimerCountAction>) {
    return {
      onIncrement: () => dispatch(actions.Increment_starting_count()),
      onDecrement: () => dispatch(actions.decrement_starting_count()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CounterStatefull);
