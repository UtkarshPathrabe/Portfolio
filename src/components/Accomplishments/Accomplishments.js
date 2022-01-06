import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import LeetCode from './LeetCode/LeetCode';
import HackerRank from './HackerRank/HackerRank';
import SphereOnlineJudge from './SphereOnlineJudge/SphereOnlineJudge';
import Certificates from './Certificates/Certificates';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 190, text: 'Github Followers', },
  { number: 390, text: 'Github Stars', }
];

const Accomplishments = () => (
  <Section id='accomplishments'>
    <SectionDivider />
    <SectionTitle main>Accomplishments</SectionTitle>
    <Boxes>
      {data.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <LeetCode />
    <HackerRank />
    <SphereOnlineJudge />
    <Certificates />
  </Section>
);

export default Accomplishments;
