import React from 'react';




class CheeseList extends React.Component {

  render() {
    const cheeseList = this.props.cheeses.map((cheese,index) => { return (<li key={index}>{cheese}</li>)});
    return (
      <div>
       <ul>{cheeseList}</ul>
      </div>
    )
  }
 }

 export default CheeseList;
