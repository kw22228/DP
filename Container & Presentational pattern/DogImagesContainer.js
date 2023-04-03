/** Container Component (외부 API로 데이터를 받아와서 Presentational 컴포넌트로 데이터를 전달한다.) */
import React from 'react';
import DogImages from './DogImages';

export default class DogImagesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      .then((res) => res.json())
      .then(({ message }) => this.setState({ dogs: message }));
  }

  render() {
    return <DogImages dogs={this.state.dogs} />;
  }
}
