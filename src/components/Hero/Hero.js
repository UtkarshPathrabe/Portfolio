import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
        Utkarsh Pathrabe
      </SectionTitle>
      <SectionText>
        Senior System Software Engineer (Autonomous Vehicles) at NVIDIA
      </SectionText>
      <Link href='#about' passHref>
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;