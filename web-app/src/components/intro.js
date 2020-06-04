import React from 'react';
import '../css/intro.css';

/*
function Intro() {
  return (
    <div id="introMain">
      <div id="bgImg"></div>
      <h1 id="titleOne" className="title-text">Somnia</h1>
      <h3 id="titleTwo" className="title-text">Dream Journal</h3>
    </div>
  );
}
*/

class Intro extends React.Component {
  componentDidMount() {
    this.fadeOne = setTimeout(() => { document.getElementById('titleOne').className += ' fade-in'; }, 1000);
    this.fadeTwo = setTimeout(() => { document.getElementById('titleTwo').className += ' fade-in'; }, 2000);
    this.fadeThree = setTimeout(() => { document.getElementById('bgImg').className += ' fade-in'; }, 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.fadeOne);
    clearTimeout(this.fadeTwo);
    clearTimeout(this.fadeThree);
  }

  render() {
    return (
      <div id="introMain">
        <div id="bgImg"></div>
        <h1 id="titleOne" className="title-text">Somnia</h1>
        <h3 id="titleTwo" className="title-text">Dream Journal</h3>
      </div>
    );
  }
}

export default Intro;
