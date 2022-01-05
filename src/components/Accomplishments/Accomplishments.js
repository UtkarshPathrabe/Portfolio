import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import LeetCode from './LeetCode/LeetCode';

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
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <LeetCode />
  </Section>
);

export default Accomplishments;
