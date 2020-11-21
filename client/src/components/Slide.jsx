import React from 'react';
import styles from './Slider.scss';
import Description from './Description.jsx';
import HeartButton from './HeartButton.jsx';
import HeartButtonFilled from './HeartButtonFilled.jsx';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: false,
    };
    this.heartListing = this.heartListing.bind(this);
  }

  heartListing() {
    var newHeart = !this.state.heart;
    this.setState({
      heart: newHeart,
    });
  }

  render() {

    const heartToRender = this.state.heart ? <HeartButtonFilled heartListing={this.heartListing} id={this.props.id} /> : <HeartButton heartListing={this.heartListing} id={this.props.id} />;

    return (
      <div>
        <div className={styles.slide} style={{ transform: `translateX(${this.props.x}%)` }}>
          <div className={styles.image}>
            <img src={this.props.listing.image} />
            {heartToRender}
          </div>
          <Description id={this.props.listing.id} listing={this.props.listing} />
        </div>
      </div>
    );
  }
}

export default Slide;
