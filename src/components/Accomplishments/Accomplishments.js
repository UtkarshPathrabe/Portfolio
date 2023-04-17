import React from 'react';

import { Box, Boxes, BoxNum, BoxText, GitHubStats, GitHubMostUsedLanguages, GitHubStatsContainer, GitHubProfileStats } from './AccomplishmentsStyles';
import LeetCode from './LeetCode/LeetCode';
import HackerRank from './HackerRank/HackerRank';
import SphereOnlineJudge from './SphereOnlineJudge/SphereOnlineJudge';
import Certificates from './Certificates/Certificates';
import TestScores from './TestScores/TestScores';

const GitHubData = [
  { number: 60, text: 'Open Source Projects'},
  { number: 330, text: 'Github Followers', },
];

const Accomplishments = () => (
  <>
    <GitHubStatsContainer>
      <GitHubStats src={'https://github-readme-stats.vercel.app/api?username=UtkarshPathrabe&show_icons=true&hide=issues,contribs&theme=github_dark&border_radius=10px&count_private=true'} alt='github_stats' />
      <GitHubMostUsedLanguages src={'https://github-readme-stats.vercel.app/api/top-langs/?username=UtkarshPathrabe&theme=github_dark&border_radius=10px&layout=compact&langs_count=10'} alt='github_most_used_languages' />
    </GitHubStatsContainer>
    <GitHubProfileStats src="https://github-profile-trophy.vercel.app/?username=utkarshpathrabe&theme=gruvbox&column=6&margin-w=2&margin-h=2&no-bg=true&no-frame=true&rank=-C,-?" alt="github profile stats" />
    <Boxes>
      {GitHubData.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <LeetCode />
    <HackerRank />
    <SphereOnlineJudge />
    <TestScores />
    <Certificates />
  </>
);

export default Accomplishments;
