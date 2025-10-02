import Logo from '@/components/ui/Logo';
import { Text } from '@/styles/typography';
import { variables } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexWrapper } from '../../../styles/index.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${variables.spacing['xl-32']};
  align-items: center;
  justify-content: space-between;
`;

const UpperFooter = () => (
  <Wrapper>
    <Link
      href='/'
      aria-label='Streamec homepage'
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Logo width={120} height={32} alt='Streamec logo' />
    </Link>
    <FlexWrapper
      $mobileGap={variables.spacing['xl-32']}

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
