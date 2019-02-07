import React, { Component } from 'react';
import $ from 'jquery'; // jqueryを使えるようにする
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      radio: '1', // ラジオボタン選択値
      image: '', // プロフィール画像のurl
      yourName: '', // 名前
      live: '', // 居住地
      job: '', // 職業
      hobby: '', // 趣味
      like: '', // 好きなもの
      comment:'', // コメント
      url: '', // URL
      message: '', // 最終的に表示するメッセージ
      successClass: '' // display:block
    };
  }

  // value入力中
  handleInputLive(event) {
    const inputLive = event.target.value;
    this.setState({
      live: inputLive
    });
  }

  handleInputName(event) {
    const inputName = event.target.value;
    this.setState({
      yourName: inputName
    });
  }

  handleInputJob(event) {
    const inputJob = event.target.value;
    this.setState({
      job: inputJob
    });
  }

  handleInputHobby(event) {
    const inputHobby = event.target.value;
    this.setState({
      hobby: inputHobby
    });
  }

  handleInputLike(event) {
    const inputLike = event.target.value;
    this.setState({
      like: inputLike
    });
  }

  handleInputComment(event) {
    const inputComment = event.target.value;
    this.setState({
      comment: inputComment
    });
  }

  handleInputUrl(event) {
    const inputUrl = event.target.value;
    this.setState({
      url: inputUrl
    });
  }

  // SENDボタンクリック時
  send() {
    // const { live } = this.state; // stateからvalueを取得
    this.writeMsg();
    let { yourName } = this.state;
    if (yourName === '') { // 名前未入力のバリデーション
      window.alert('名前を入力してください');
    } else {
      $('.outputArea__msg').css('opacity', 1);
      setTimeout(() => {
        $('.outputArea__sns').css('opacity', 1);
      }, 400);
    }
  }

  writeMsg() {
    const { radio } = this.state; // stateからradioの値を取得
    let { live } = this.state; // stateからvalueを取得
    let { job } = this.state;
    let { hobby } = this.state;
    let { like } = this.state;
    let { comment } = this.state;
    const line = ' | ';
    let tmpMsg = '';
    if (radio === '1') {
      this.setState({
        image: './girl.jpg'
      })
      tmpMsg = '@ ' + live + ' /* job */' + job + ' /* hobby */' + hobby + ' /* love */' + like + ' ' + comment;

    } else if (radio === '2') {
      this.setState({
        image: './dog.jpg'
      })
      tmpMsg = live + line + job + line + hobby + line + like + line + comment + ' ' + comment;
    } else {
      this.setState({
        image: './pika.jpg'
      })
      tmpMsg = live + 'で' + job + 'やってます。' + hobby + ',' + like + 'が好きです！！ ' + comment;
    }

    this.setState({
      message: tmpMsg
    })
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 className="top__title">Profile Creator</h1>
          <p className="top__desc">Let's create your profile you can use your page in SNS!</p>
        </div>

        <div className="formArea">
          <div className="radioArea">
            <p className="radioArea__txt">Select Type</p>
            <div className="radioArea__button">
              <ul className="typeList">
                <li className="typeList__item">
                  <input type="radio" name="textType" id="type1" value="1" checked={this.state.radio === '1'} onChange={() => this.setState({ radio: '1' })} />
                  <label htmlFor="type1">SHAREOTSU</label>
              </li>
                <li className = "typeList__item" >
                  <input type="radio" name="textType" id="type2" value="2" checked={this.state.radio === '2'} onChange={() => this.setState({ radio: '2' })} />
                  <label htmlFor="type2">SHIMPLE</label>
              </li>
                <li className = "typeList__item" >
                  <input type="radio" name="textType" id="type3" value="3" checked={this.state.radio === '3'} onChange={() => this.setState({ radio: '3' })} />
                  <label htmlFor="type3">TALKING</label>
              </li>
              </ul>
            </div>

          </div>
          <div className="inputArea">
            <p className="inputArea__txt">Fill In The Blanks</p>
            <div className="inputArea__item">
              <label>名前</label>
              <input type="text" value={this.state.yourName} onChange={this.handleInputName.bind(this)} />
            </div>
            <div className="inputArea__item">
              <label>居住地</label>
              <input type="text" value={this.state.live} onChange={this.handleInputLive.bind(this)} />
            </div>
            <div className="inputArea__item">
              <label>職業</label>
              <input type="text" value={this.state.job} onChange={this.handleInputJob.bind(this)}/>
            </div>
            <div className="inputArea__item">
              <label>趣味</label>
              <input type="text" value={this.state.hobby} onChange={this.handleInputHobby.bind(this)}/>
            </div>
            <div className="inputArea__item">
              <label>好きなもの</label>
              <input type="text" value={this.state.like} onChange={this.handleInputLike.bind(this)}/>
            </div>
            <div className="inputArea__item">
              <label>ひとこと</label>
              <input type="text" value={this.state.comment} onChange={this.handleInputComment.bind(this)}/>
            </div>
            <div className="inputArea__item">
              <label>URL</label>
              <input type="text" value={this.state.url} onChange={this.handleInputUrl.bind(this)}/>
            </div>
          </div>


          {/* 職業, 出身、居住域、趣味、すきなもの（複数）、URL*/}
          {/* 未記入の場合のバリデーション、分岐 */}
          <button className="sendButton" onClick={this.send.bind(this)}>CREATE!</button>
        </div>


        <div className="outputArea">
          < p className ='outputArea__msg' >Created!!!</p>
          <div className="outputArea__sns">
            <div className="sns__header">
              <img src="./sns_header.png" alt = "" />
            </div>
            <div className="sns__content">
              <div className="sns__content__photo">
                {/* <img src="./girl.JPG" alt=""/> */}
                <img src={this.state.image} alt=""/>

              </div>
              <div className="sns__content__text">
                <div className="row1">
                  <p className="userId">nijibox</p>
                  <p className="lookPro">プロフィールを編集</p>
                  <span className="wheel">
                    <img src="./wheel.png" alt=""/>
                  </span>
                </div>
                <div className="row2">
                  <p>投稿98件&nbsp;&nbsp;&nbsp;フォロワー201人&nbsp;&nbsp;&nbsp;228人をフォロー中 </p>
                </div>
                <div className="row3">
                  {this.state.yourName}
                </div>
                <pre className="row4">
                {this.state.message}
                </pre>
                <div className="row5"><a href={this.state.url} target="_blank">{this.state.url}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;