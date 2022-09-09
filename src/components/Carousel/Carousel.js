import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../Data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import img1 from '../../images/netrunner.jpg';
import img2 from '../../images/cryptobox.jpg';
import img3 from '../../images/faccobus11.jpg';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

const CarouselInit = () => {
	const [sliderRef, setSliderRef] = useState(null);
	const images = [img1, img2, img3];

	return (
		<Section inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					Find more about us
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={images[index]} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<CardButton>&nbsp;&nbsp; {el.linkGithub} &nbsp;&nbsp; {el.linkTwitter} &nbsp;&nbsp; {el.linkLinkedin} &nbsp;&nbsp;</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default CarouselInit;