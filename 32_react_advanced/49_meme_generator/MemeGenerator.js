//versie 1 zelf bedacht, zonder random, teller ophogen, geen submit maar onClick
// versie 2 volgens Bob
// submit form


import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      // counter: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        // console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  // als ik het zo schrijf, hoef ik niet expliciet te binden in de constructor
  handleChange = (event) => {
    const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }

  // newRandomImage = (event) => {
  //   console.log("klik")
  //   event.preventDefault();
  //   this.setState((prevState) => {
  //     let newCounter = prevState.counter + 1;
  //     let newUrl = this.state.allMemeImgs[newCounter].url
  //     console.log(newUrl)
  //     return ({ ...prevState, counter: newCounter, randomImage: newUrl})
  //   })
  // }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState((prevState) => {
      return { randomImage: randMemeImg}
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Top text"
            name="topText"
            type="text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Bottom text"
            name="bottomText"
            type="text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <br />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
