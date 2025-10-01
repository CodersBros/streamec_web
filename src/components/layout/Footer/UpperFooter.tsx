
import Logo from '@/components/ui/Logo';
import { Text } from '@/styles/typography';
import Link from 'next/link';
import styled from 'styled-components';
import { variables } from '@/styles/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${variables.spacing['xl-32']};
  padding: 0 ${variables.spacing['lg-24']};
  align-items: center;
`;



const UpperFooter = () => (
  <Wrapper>
    <Link href="/" aria-label="Streamec homepage" style={{ display: 'flex', alignItems: 'center' }}>
      <Logo width={120} height={32} alt="Streamec logo" />
    </Link>
    <Text as="a" variant="body/md" style={{ color: 'var(--color-text-muted)' }} {...{ href: 'mailto:streamec.office@streamec.com' }}>streamec.office@streamec.com</Text>
    <Text as="a" variant="body/md" style={{ color: 'var(--color-text-muted)' }} {...{ href: 'tel:600000000' }}>600 000 000</Text>
  </Wrapper>
);

export default UpperFooter;