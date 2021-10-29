import React from 'react';
import ProductDetail from './productDetail/ProductDetail.jsx';
import QA from './QA.jsx';
import Ratings from './ratings/Ratings.jsx';
import MainRelatedFeature from './relatedItems/mainRelatedFeature.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <>
        <ProductDetail />
        <QA />
        <Ratings />
        <MainRelatedFeature />
      </>
    )
  }
}

export default App;