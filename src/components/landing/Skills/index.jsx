import React from 'react';
import { Container } from 'components/common';
import { Header } from 'components/theme';
import dev from 'assets/illustrations/skills.svg';
import serv from 'assets/illustrations/consulting.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <Header />
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Shan and I’m an Automation Specialist!" />
      </Thumbnail>
      <Details>
        <h1>Skills</h1>
        <ul>
          <li>programming/scripting skills: python/javascript/java/C#/VBScript/perl/etc</li>
          <li>test automation frameworks: keyword driven/behavior driven/library based/hybrid/etc</li>
          <li>test automation tools: Selenium/Appium/QTP/TestComplete/Postman/JMeter/SOAPUI/Robot/etc</li>
          <li>robotic process automation: UiPath/BluePrism/Pega</li>
          <li>continuous integration: Ant/Maven/Jenkins/TeamCity</li>
          <li>source control: git/perforce/svn</li>
        </ul>
        <p>My resume is <a href="https://my.indeed.com/p/shawnm-4kmitqt" target="_blank"> on Indeed</a></p>
      </Details>
    </SkillsWrapper>
    <SkillsWrapper as={Container}>
      <Details>
        <h1>What I do</h1>
        <ul>
          <li>Build test automation framework from scratch and provide training/knowledge transfer</li>
          <li>Evaluate and select best automation strategy and tools </li>
          <li>Deploy automation framework into continuous integretion</li>
          <li>Migrate/improve existing automation frameworks</li>
          <li>Businees process selection/improvement for process automation</li>
          <li>Build demos/components/libraries for selected business subprocess</li>
          <li>Troubleshoot configuration/production issues related to automation</li>
        </ul>
      </Details>
      <Thumbnail>
        <img src={serv} alt="I’m Shan and I’m an Automation Specialist!" />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
);
