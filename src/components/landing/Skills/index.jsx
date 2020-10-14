import React from 'react';
import { Container } from 'components/common';
import { Header } from 'components/theme';
import dev from 'assets/illustrations/skills3.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <Header />
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Shan and I’m an Automation Developer!" />
      </Thumbnail>
      <Details>
        <p>Skills</p>
        <ul>
          <li>programming/scripting skills: python/javascript/java/C#/VBScript/etc</li>
          <li>test automation frameworks: keyword driven/behavior driven/library based/hybrid/etc</li>
          <li>test automation tools: selenium/appium/TestComplete/QTP/Postman/SOAPUI/robot/etc</li>
          <li>robotic process automation: UiPath/BluePrism/Pega</li>
          <li>continuous integration: Ant/Maven/Jenkins/TeamCity</li>
          <li>source control: git/perforce/svn</li>
        </ul>
        <p>My resume is <a href="https://my.indeed.com/p/shawnm-4kmitqt" target="_blank"> Here</a></p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
