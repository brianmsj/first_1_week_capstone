import React from 'react';
import {connect} from 'react-redux';
import {fetchCheesesRequest} from '../actions/cheese'

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})

class CheeseList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.dispatch(fetchCheesesRequest());
  }

  render() {
    const cheeseList = this.props.cheeses.map((cheese,index) => { return (<li key={index}>{cheese}</li>)});
    return (
      <div>
       <ul>{cheeseList}</ul>
      </div>
    )
  }
 }

 export default connect(mapStateToProps)(CheeseList);
