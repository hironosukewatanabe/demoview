import React, { Component } from 'react';
import axios from 'axios';

const BOOKS_ENDPOINT = 'http://localhost:8080/api/books';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }
  callBookApi() {
    axios
      .get(BOOKS_ENDPOINT, { 
        withCredentials: false
      })
      .then((results) => {
        const res = results.data[0].name;
        this.setState({
					info: res
        });
        console.log("取得に成功");
        console.log(results.data[0].name);
      },
      )
      .catch((e) => {
        console.log('通信に失敗しました。');
        console.log(e.message);
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Book情報検索</h1>
        <p> 本情報: {this.state.info} </p>
        <input
          type="button"
          value="bookapiを叩く"
          onClick={() => this.callBookApi()}
        />
      </div>
    );
  }
}

export default App;