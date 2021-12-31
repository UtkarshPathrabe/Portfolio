import React from 'react';
import Image from 'next/image';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(( { id, image, title, description, tags, source, visit } ) => (
        <BlogCard key={id}>
          <Image src={image} width={400} height={200} alt={id} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target='_blank'>
              Visit
            </ExternalLinks>
            <ExternalLinks href={source} target='_blank'>
              Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;