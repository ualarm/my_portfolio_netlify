import React from 'react';
import { Container } from 'components/common';
import { Header } from 'components/theme';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Drop us a line!</h1>
        <ContactForm />
        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank"> Privacy Policy</a> and <a href="https://policies.google.com/privacy" target="_blank"> Terms of Service</a> apply.</p>
        <h1>Get Started Today</h1>
        <h2>We offer a broad range of consulting services in test automation and process automation. Send us a message today, and we can start you on a path to success.</h2>
      </Details>
      {/*<Thumbnail>
        <img src={contact} alt="I’m Shan and I’m an Automation Developer!" />
      </Thumbnail>*/}
    </IntroWrapper>
  </Wrapper>
);
