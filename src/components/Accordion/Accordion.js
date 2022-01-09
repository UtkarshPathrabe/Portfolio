import { AccordionTitleContainer } from './AccordionStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Accordion = ({ title, content, id, isActive, toggleActive }) => {
    return (
        <Section id={id}>
            <SectionDivider />
            <AccordionTitleContainer onClick={toggleActive}>
                <SectionTitle main>{ title }</SectionTitle>
                <SectionTitle main>{ isActive ? '-' : '+' }</SectionTitle>
            </AccordionTitleContainer>
            { isActive && content }
        </Section>
    );
};

export default Accordion;