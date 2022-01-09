import { AccordionTitleContainer } from './AccordionStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai';

const Accordion = ({ title, content, id, isActive, toggleActive }) => {
    return (
        <Section id={id}>
            <SectionDivider />
            <AccordionTitleContainer onClick={toggleActive}>
                <SectionTitle main>{ title }</SectionTitle>
                <SectionTitle main>{ isActive ? <AiOutlineCaretDown /> : <AiOutlineCaretRight /> }</SectionTitle>
            </AccordionTitleContainer>
            { isActive && content }
        </Section>
    );
};

export default Accordion;