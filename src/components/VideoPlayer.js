import React from 'react';

import Videojs from './Video';

// End Cards data
const sampleData = [
  {
    name: 'bunny',
    img: 'http://media.w3.org/2010/05/bunny/poster.png',
    url: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  },
  {
    name: 'oceans',
    img: 'http://media.w3.org/2010/05/video/poster.png',
    url: 'http://vjs.zencdn.net/v/oceans.mp4'
  }
];

class VideoPlayer extends React.Component {

	render() {
		const video = this.props.match.params.id
		return (
			<section className="player-container">
				<Videojs
					autoplay={false}
					playbackRates={[0.5, 1, 1.25, 1.5, 2]}
					width={720}
					height={400}
					controls={true}
					sources={this.props.location.state.source}
					endScreenData={sampleData} 
				/>
				<p>{video}</p>
			</section>
		)
	}
}

export default VideoPlayer;