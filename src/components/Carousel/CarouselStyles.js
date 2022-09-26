import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 430px;
	box-shadow: 6px 6px 6px #00000040;
	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 30px auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.div`
	font-size: 1.7rem;
	padding: 5px 10px;
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;

	& a {
		color: #01579B !important;
	}
`;