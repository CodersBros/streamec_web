import { Text } from '@/styles/typography';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-sm, 8px);
`;

const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xl, 32px);
`;



const LowerFooter = () => (
  <Wrapper>
    <LinksRow>
      <a href="/privacy" style={{ textDecoration: 'underline' }}>
        <Text variant="body/md" style={{ color: 'var(--color-text-muted)', letterSpacing: 0 }}>Privacy Policy</Text>
      </a>
      {' | '}
      <a href="/cookies" style={{ textDecoration: 'underline' }}>
        <Text variant="body/md" style={{ color: 'var(--color-text-muted)', letterSpacing: 0 }}>Cookies Policy</Text>
      </a>
    </LinksRow>
    <Text variant="body/md" style={{ color: 'var(--color-text-muted)', textAlign: 'left' }}>
      &copy; {new Date().getFullYear()} Streamec. All rights reserved.
    </Text>
  </Wrapper>
);

export default LowerFooter;


