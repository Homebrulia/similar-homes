import React from 'react';
import axios from 'axios';
import Slider from './Slider.jsx';
import Header from './Header.jsx';
import styles from './App.css';

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
      url: `${window.location.href}similar`,
    })
      .then((response) => {
        console.log('success', response.data.similarHomes);
        this.setState({
          listings: response.data.similarHomes,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Slider listings={this.state.listings} />
      </div>
    );
  }
}

export default App;
