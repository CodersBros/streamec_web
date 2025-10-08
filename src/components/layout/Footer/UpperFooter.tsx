import Logo from '@/components/ui/Logo';
import { Text } from '@/styles/index.client';
import { variables } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexWrapper } from '../../../styles/index.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;



  @media ${variables.media.tablet} {
flex-direction: row;
gap: ${variables.spacing['xl-32'] };
align-items: center;
  justify-content: space-between;

  }
`;

const UpperFooter = () => (
  <Wrapper>
    <Link
      href='/'
      aria-label='Streamec homepage'
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Logo width={243} height={86} alt='Streamec logo' />
    </Link>
    <FlexWrapper
      $mobileGap='12px'
      $mobileDirection='column'
      $tabletDirection='row'
      $mobileWrap='wrap'

    >
      <Text
        as='a'
        variant='body/md'
        style={{ color: variables.colors.white }}
        {...{ href: 'mailto:streamec.office@streamec.com' }}
      >
        streamec.office@streamec.com
      </Text>
      <Text
        as='a'
        variant='body/md'
        style={{ color: variables.colors.white }}
        {...{ href: 'tel:600000000' }}
      >
        600 000 000
      </Text>
    </FlexWrapper>
  </Wrapper>
);

export default UpperFooter;
