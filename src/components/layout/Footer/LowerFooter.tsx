import { Text } from '@/styles/index.client';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm, 8px);

  @media ${variables.media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xl, 32px);

 
`;



const LowerFooter = () => (
  <Wrapper>
    <LinksRow>
      <a href="/legal/privacy" style={{ textDecoration: 'underline' }}>
        <Text variant="body/sm" style={{ color: variables.colors.grayA0A, letterSpacing: 0 }}>Privacy Policy</Text>
      </a>
      {' | '}
      <a href="/legal/cookies" style={{ textDecoration: 'underline' }}>
        <Text variant="body/sm" style={{ color: variables.colors.grayA0A, letterSpacing: 0 }}>Cookies Policy</Text>
      </a>
    </LinksRow>
    <Text variant="body/Instrument" style={{
      color: variables.colors.grayA0A, textAlign: 'left'
    }}>
      &copy; {new Date().getFullYear()} Streamec. All rights reserved.
    </Text>
  </Wrapper>
);

export default LowerFooter;


