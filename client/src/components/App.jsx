import React from 'react';
import axios from 'axios';
import Slider from './Slider.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    axios.get('/api/listings/69')
      .then((response) => {
        // response.data[0].similar returns array of similar homes
        // response.data[0].similar[0].image returns image url
        console.log('res', response.data[0].similar);
        this.setState({ listings: response.data[0].similar });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Slider listings={this.state.listings} />
      </div>
    );
  }
}

export default App;
