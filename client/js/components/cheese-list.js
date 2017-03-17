import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese'



class CheeseList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
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

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);
