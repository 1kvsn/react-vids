import React from 'react';

import Videojs from './Video';

class VideoPlayer extends React.Component {

	render() {
		return (
			<section>
				<Videojs
					autoplay={false}
					playbackRates={[0.5, 1, 1.25, 1.5, 2]}
					width={720}
					height={400}
					controls={true}
					sources={this.props.location.state.source}
				/>
			</section>
		)
	}
}

export default VideoPlayer;