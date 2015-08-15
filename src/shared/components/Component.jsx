import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import { selectMeals } from '../selectors/selectors';
import * as Actions from '../actions/Actions';

class Component extends React.Component {

  componentWillMount() {
    this.props.beginLoadingMeals();
  }

  render() {

    const meals = Object.keys(this.props.meals).map((id, index) => {
      return <li key={id}>{this.props.meals[id].name}</li>;
    });

    return (
      <ul>
        {meals}
      </ul>
    );
  }
}

export default class ComponentConnector {

  render() {
    return (
      <Connector select={selectMeals}>
        {({ meals, dispatch }) =>
          <Component meals={meals} {...bindActionCreators(Actions, dispatch)} />
        }
      </Connector>
    );
  }
}
