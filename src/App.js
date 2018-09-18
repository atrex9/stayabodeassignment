import React, { Component } from 'react';
import './App.css';
import searchImg from './img/ic-logo.png';
import searchImg2x from './img/ic-logo@2x.png'
import searchImg3x from './img/ic-logo@3x.png'
import nextImg from './img/ic-next.png';
import nextImg2x from './img/ic-next@2x.png';
import nextImg3x from './img/ic-next@3x.png';
import EiffelTower from './EiffelTower';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Homepage">
          <nav>
            <a><img className="ic_logo" src={searchImg} srcSet={`${searchImg2x} 2x, ${searchImg3x} 3x`}></img></a>
            <a className="-copy-3">Suggest Topics</a>
            <a className="-copy-2">Favourites</a>
            <a className="-copy">Bookmarks</a>
            <button className="BG"><span className="layer">Editor's Picks</span></button>
            <a>
              <div className="Line-2"></div>
              <div className="Line-2-Copy"></div>
              <div className="Line-2-Copy-2"></div>
            </a>
          </nav>
          <div>
            <label className="Search" >Search...</label>
            <span className="Line"></span>
            <button className="BGButton">
              <img src={nextImg}
                srcSet={`${nextImg2x} 2x, ${nextImg3x} 3x`}
                className="ic_next"></img>
            </button>
          </div>
          <div className="recentSearches">
          <label className ="layer1 recentSearchesBtn">Recent Searches</label>
          <button className="BGButton1 layer1" onClick = {()=>this.onClick()}>Eiffel Tower</button>
          <button className="BGButton2 layer1">Trigonometry</button>
          <button className="BGButton3 layer1">Why Mars?</button>
          <button className="BGButton4 layer1">Iron and Wine</button>
          <button className="BGButton5 layer1">Time Travel</button>
          <button className="BGButton6 layer1">Show All</button>
          </div>
        </div>
        <EiffelTower/>
      </div>
    );
  }

  onClick(){
    document.querySelector('#EiffelTower').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}


export default App;
