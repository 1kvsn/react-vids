import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

import Videojs from './Video';
import {
	First,
	Second,
	Third,
	Fourth,
	Fifth,
	Sixth,
	Seventh,
	Eighth,
	Nineth,
	Tenth,
	posterEight
} from '../assets';

import ItemsCarousel from 'react-items-carousel';


class Home extends React.Component {
	state = {
		videos: [
			{
				title: 'sampleOne',
				url: First,
				source: [
					{
						src: First,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleTwo',
				url: Second,
				source: [
					{
						src: Second,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleThree',
				url: Third,
				source: [
					{
						src: Third,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleFour',
				url: Fourth,
				source: [
					{
						src: Fourth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleFive',
				url: Fifth,
				source: [
					{
						src: Fifth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleSix',
				url: Sixth,
				source: [
					{
						src: Sixth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleSeven',
				url: Seventh,
				source: [
					{
						src: Seventh,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleEight',
				poster: posterEight,
				source: [
					{
						src: Eighth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleNine',
				url: Nineth,
				source: [
					{
						src: Nineth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'sampleTen',
				url: Tenth,
				source: [
					{
						src: Tenth,
						type: 'video/mp4',
					}
				]
			}
		],
		activeItemIndex: 0,
	}

	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });


	render() {
		return (
			<section className="wrapper">
				<div className="carousel-container">
					<h1>Home</h1>
					<ItemsCarousel
						Placeholder configurations
						enablePlaceholder
						numberOfPlaceholderItems={0}
						minimumPlaceholderTime={1000}
						placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

						// Carousel configurations
						numberOfCards={4}
						gutter={12}
						showSlither={true}
						firstAndLastGutter={true}
						infiniteLoop
						freeScrolling={false}

						// Active item configurations
						requestToChangeActive={this.changeActiveItem}
						activeItemIndex={this.state.activeItemIndex}
						activePosition={'center'}

						chevronWidth={60}
						rightChevron={
							<Button 
								shape="circle"
								style={{
								borderRadius: '50%',
								width: '32px',
								height: '32px',
								padding: 0,
								fontSize: '16px',
								border: 'none',
								outline: 'none'
								}}>
								<Icon type="right" />
							</Button>
						}
						leftChevron={
							<Button 
								shape="circle" 
								style={{
								borderRadius: '50%',
								width: '32px',
								height: '32px',
								padding: 0,
								fontSize: '16px',
								border: 'none',
								outline: 'none'
								}}
							>
								<Icon type="left" />
							</Button>
						}
						outsideChevron={false}
					>
						{
							this.state.videos.map((video, i) => {
								return (
									<>
										<Link
											to={{
												pathname: `videos/${video.title}`,
												state: {
													source: video.source
												}
											}}
										>
											<Videojs
												autoplay={false}
												playbackRates={[0.5, 1, 1.25, 1.5, 2]}
												width={250}
												height={150}
												// controls={true}
												sources={video.source}
												poster={video.poster ? video.poster : ''}
											/>
										</Link>
									</>
								)
							})
						}
					</ItemsCarousel>
				</div >
			</section >
		)
	}
}

export default Home;
