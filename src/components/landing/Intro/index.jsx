import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Your automation journey starts here!</h1>
        <h4>I’m Shan Mi and I’m an Automation Specialist with 20+ years of experiences</h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Shan Mi and I’m an Automation Developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
