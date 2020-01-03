import React from 'react';
import videojs from 'video.js';

export default class Videojs extends React.Component {
  state = {
    isEnd: false
  };

  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      // console.log('onPlayerReady', this);
    });

    this.player.on('on', () => {
      console.log('replaying....');
      this.setState({ isEnd: false });
    });

    this.player.on('ended', () => {
      this.setState({ isEnd: true });
      this.player.exitFullscreen();
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video 
          ref={node => (this.videoNode = node)} 
          className="video-js" 
        />
        {this.state.isEnd ? (
          <div className="end-screen-container">
            <div>
              <h5 class="end-screen-title">Sample End screen...</h5>
              <div class="end-screen-items">
                {this.props.endScreenData.map(item => {
                  return (
                    <div className="end-screen-item">
                      <img
                        src={item.img}
                        alt={item.name}
                        width={250}
                        height={150}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}