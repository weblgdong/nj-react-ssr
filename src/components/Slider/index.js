import React from 'react'
import { Carousel } from 'antd'

export default class Slider extends React.Component {
	render() {
		const {imgs} = this.props 
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true
		}

		return(
			<div>
				<Carousel {...settings}>
					<div style={{ background: 'url(' + require('../../assets/1.jpg') + ')', backgroundSize: 'cover'}}></div>
					<div style={{ background: 'url(' + require('../../assets/1.jpg') + ')', backgroundSize: 'cover' }}></div>
					<div style={{ background: 'url(' + require('../../assets/1.jpg') + ')', backgroundSize: 'cover' }}></div>
				</Carousel>
			</div>
		)
	}
}