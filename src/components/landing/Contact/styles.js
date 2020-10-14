import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  h2 {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 16pt;
    font-weight: normal;
    color: #212121;
  }

  p {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 10pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
  a {
    font-size: 10pt;
    font-weight: bold;
    color: #212121;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 240px) {
    width: 50%;
    margin-bottom: 2rem;
  }

  img {
    width: 50%;
  }
`;
