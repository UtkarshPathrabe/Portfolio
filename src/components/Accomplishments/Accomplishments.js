import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CertificateContainer, CertificateLink, CertificateCard, Title, Text, HelperText } from './AccomplishmentsStyles';
import LeetCode from './LeetCode/LeetCode';
import HackerRank from './HackerRank/HackerRank';
import SphereOnlineJudge from './SphereOnlineJudge/SphereOnlineJudge';
import CertificateData from '../../constants/certificates';

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
    <SectionSubTitle>Certificates</SectionSubTitle>
    <CertificateContainer>
      {CertificateData.map(({ name, organization, issue_date, certificate_id, certificate_url }) => (
        <CertificateLink key={name} href={certificate_url} target='_blank'>
          <CertificateCard>
            <Title>{name}</Title>
            <div>
              <Text>{organization}</Text>
              <Text>Issue Date: {issue_date}</Text>
              {certificate_id && <HelperText>ID: {certificate_id}</HelperText>}
            </div>
          </CertificateCard>
        </CertificateLink>
      ))}
    </CertificateContainer>
  </Section>
);

export default Accomplishments;
