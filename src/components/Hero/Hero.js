import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Utkarsh Pathrabe
      </SectionTitle>
      <SectionText>
        Senior System Software Engineer at NVIDIA
      </SectionText>
      <Link href='#about'>
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;