import React from 'react';
import styled from 'styled-components';
import BlogSection from './blog-section';
import Line from '../../static/line.svg';
import porfolioBg from '../../assets/images/portfolio-bg.jpg';
import { CustomButton } from '../misc';
import OnlyLine from '../../static/lineOnly.svg';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BottomInformation = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 40%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-flow: column;
  margin-bottom: 120px;
`;

const Title = styled.p`
  font-size: 7rem;
  color: white;
  letter-spacing: 0.2em;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const Subtitle = styled.p`
  color: white;
  margin-left: 20px;
  font-size: 1.3rem;
`;

const StyledImg = styled.img`
  /* opacity: 0; */
`;

const HomeContent = () => {
  const scrollPage = () => {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container>
        <Content>
          <ImageContainer>
            <StyledImg src={porfolioBg} />
          </ImageContainer>
          <TextContainer>
            <Title>Hello</Title>
            <SubTitleContainer>
              <OnlyLine />
              <Subtitle>Front-end Developer</Subtitle>
            </SubTitleContainer>
            <CustomButton>Read more</CustomButton>
          </TextContainer>
        </Content>
        <BottomInformation onClick={scrollPage}>
          <Line />
        </BottomInformation>
      </Container>
      <BlogSection />
    </>
  );
};

export default HomeContent;
