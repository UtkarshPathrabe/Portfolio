import React from 'react';
import useSWR from 'swr';
import { SiLeetcode } from 'react-icons/si';
import { BiErrorCircle, BiLinkExternal } from 'react-icons/bi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Bars } from 'react-loading-icons';
import { get } from 'lodash';

import { SectionSubTitle, SectionText } from '../../styles/GlobalComponents';
import { TitleLink, Content, ErrorContent } from './LeetCodeStyles';

const fetcher = (url) => fetch(url).then((res) => res.json());

const LeetCode = () => {
    const { data, error } = useSWR('https://nodejs-server-githubio-page.herokuapp.com/leetcode_data', fetcher);
    console.log({data, error});
    let content;
    if (error) {
        content = (
            <ErrorContent>
                <BiErrorCircle size='3rem' />
                <SectionText>Failed to load LeetCode profile data.</SectionText>
            </ErrorContent>
        );
    }else if (!data) {
        content = (
            <Bars width='5rem' height='4rem' />
        );
    } else {
        const ranking = get(data, ['data', 'matchedUser', 'profile', 'ranking']);
        const allProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 0, 'count']);
        const allProblems = get(data, ['data', 'allQuestionsCount', 0, 'count']);
        const easyProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 1, 'count']);
        const easyProblems = get(data, ['data', 'allQuestionsCount', 1, 'count']);
        const mediumProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 2, 'count']);
        const mediumProblems = get(data, ['data', 'allQuestionsCount', 2, 'count']);
        const hardProblemsSolved = get(data, ['data', 'matchedUser', 'submitStats', 'acSubmissionNum', 3, 'count']);
        const hardProblems = get(data, ['data', 'allQuestionsCount', 3, 'count']);
        console.log({ ranking, allProblemsSolved, allProblems, easyProblemsSolved, easyProblems, mediumProblemsSolved, mediumProblems, hardProblemsSolved, hardProblems, data });
        content = (
            <ErrorContent>
                <BiErrorCircle size='3rem' />
                <SectionText>Failed to load LeetCode profile data.</SectionText>
            </ErrorContent>
        );
    }
    return (
        <div>
            <TitleLink href='https://leetcode.com/Utkarsh_Pathrabe/' target='_blank'>
                <SectionSubTitle><SiLeetcode size={'3rem'} /> LeetCode <BiLinkExternal size={'2rem'} style={{ margin: '0 0 1.5rem 0' }} /></SectionSubTitle>
            </TitleLink>
            <Content>
                {content}
            </Content>
        </div>
    );
};

export default LeetCode;