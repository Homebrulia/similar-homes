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
    axios({
      method: 'get',
      url: `${window.location.href}listing`,
    })
      .then((response) => {
        console.log('success', response.data);
        this.setState({
          listings: response.data,
        });
      })
      .catch((err) => console.log(err));
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
