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
	posterThree,
	posterFive,
	posterEight,
} from '../assets';

import ItemsCarousel from 'react-items-carousel';


class Home extends React.Component {
	state = {
		videos: [
			{
				title: 'View of Earth from outer space',
				url: First,
				source: [
					{
						src: First,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Random cartoon characters',
				url: Second,
				source: [
					{
						src: Second,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'another animated movie clip',
				poster: posterThree,
				url: Third,
				source: [
					{
						src: Third,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Big Buck Bunny - take one',
				url: Fourth,
				source: [
					{
						src: Fourth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Big Buck Bunny - take two',
				url: Fifth,
				poster: posterFive,
				source: [
					{
						src: Fifth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Big Buck Bunny - take three',
				url: Sixth,
				source: [
					{
						src: Sixth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'waves',
				url: Seventh,
				source: [
					{
						src: Seventh,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Flower garden',
				poster: posterEight,
				source: [
					{
						src: Eighth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Big Buck Bunny - take four',
				url: Nineth,
				source: [
					{
						src: Nineth,
						type: 'video/mp4',
					}
				]
			},
			{
				title: 'Toy tank',
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
		const secondRow = this.state.videos.slice(5, 9)
		const thirdRow = this.state.videos.slice(6, 10)

		return (
			<>
				<section className="wrapper">
					<div className="carousel-container">
						<h1>Top picks</h1>
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
										backgroundColor: '#fff',
										borderRadius: '50%',
										width: '50px',
										height: '50px',
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
										backgroundColor: '#fff',
										borderRadius: '50%',
										width: '50px',
										height: '50px',
										padding: 0,
										fontSize: '16px',
										border: 'none',
										outline: 'none'
									}}
								>
									<Icon type="left" />
								</Button>
							}
							outsideChevron={true}
						>
							{
								this.state.videos.map((video, i) => {
									return (
										<div>
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
													width={250}
													height={150}
													sources={video.source}
													poster={video.poster ? video.poster : ''}
												/>
											</Link>
											<h4>{video.title}</h4>
										</div>
									)
								})
							}
						</ItemsCarousel>
					</div >
				</section >
				{/* Second Row */}
				<section className="wrapper">
					<div className="carousel-container">
						<h1>Our Recommendations</h1>
						<ItemsCarousel
							Placeholder configurations
							enablePlaceholder
							numberOfPlaceholderItems={0}
							minimumPlaceholderTime={1000}
							placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

							// Carousel configurations
							numberOfCards={4}
							gutter={12}
							showSlither={false}
							firstAndLastGutter={false}
						>
							{
								secondRow.map((video, i) => {
									return (
										<div>
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
													width={250}
													height={150}
													controls={false}
													sources={video.source}
													poster={video.poster ? video.poster : ''}
												/>
											</Link>
											<h4>{video.title}</h4>
										</div>
									)
								})
							}
						</ItemsCarousel>
					</div>
				</section>
				{/* Third row */}
				<section className="wrapper">
					<div className="carousel-container">
						<h1>Watch Later</h1>
						<ItemsCarousel
							Placeholder configurations
							enablePlaceholder
							numberOfPlaceholderItems={0}
							minimumPlaceholderTime={1000}
							placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

							// Carousel configurations
							numberOfCards={4}
							gutter={12}
							showSlither={false}
							firstAndLastGutter={false}
						>
							{
								thirdRow.map((video, i) => {
									return (
										<div>
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
													width={250}
													height={150}
													controls={false}
													sources={video.source}
													poster={video.poster ? video.poster : ''}
												/>
											</Link>
											<h4>{video.title}</h4>
										</div>
									)
								})
							}
						</ItemsCarousel>
					</div>
				</section>
			</>
		)
	}
}

export default Home;
