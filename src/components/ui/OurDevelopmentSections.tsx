'use client';
import styled from 'styled-components';
import { FlexWrapper, Wrapper } from '../../styles/index.styled';
import Text from '../../styles/text';
import { variables } from '../../styles/variables';
import BackgroundImageSection from './BackgroundImageSection';

const SectionOuter = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  box-sizing: border-box;
 
`;

const OurDevelopmentSections = () => {
  return (
    <Wrapper
      $tabletXLPadding={`0 ${variables.spacing['global-horizontal-desktop']}`}
      $mobilePadding={`0 ${variables.spacing['global-horizontal-mobile']}`}
      $tabletPadding={`0 ${variables.spacing['global-horizontal-tablet']}`}
      $tabletXLMaxWidth='1440px'
      $tabletXLMargin='0 auto'
    >
      <FlexWrapper as='section' $mobileDirection='column' $mobileGap='60px'>
        <SectionOuter>
          <Text as='h2' $variant='subheading/lg'>
            Our development and project management team stands ready to help our
            customers improve their businesses.
          </Text>
          <Text
            as='p'
            $variant='body/md'
            $tabletVariant='body/lg'
            $laptopVariant='body/lg'
          >
            Streamec/Gymmusik is an established supplier of music and
            communication solutions to the international fitness industry. With
            our platform Pin2 you have control over music variation and voice
            messages at all facilities. AI voices included. Our team&apos;s
            mission is simple: empower instructors, streamline operations, and
            create engaging experiences for every member.
          </Text>
        </SectionOuter>
        <BackgroundImageSection
          backgroundSrc='/images/sekcion_bg.jpg'
          heading={`Our team's mission is simple: empower instructors, streamline operations, and create engaging experiences for every member.`}
          minHeight={0}
        />
      </FlexWrapper>
    </Wrapper>
  );
};

export default OurDevelopmentSections;
