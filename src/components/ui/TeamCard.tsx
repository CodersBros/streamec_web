'use client';

import { typographyVariantCss } from '@/styles/typography';
import { variables } from '@/styles/variables';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface TeamMember extends Omit<TeamCardProps, 'className' | 'style'> {
  id: string;
}
export interface TeamCardProps {
  imageSrc: string;
  name: string;
  role: string;
  tag?: string;
  phone?: string;
  email?: string; 
  className?: string;
  style?: React.CSSProperties;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 24px;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const NameRoleStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Name = styled.div`
  ${typographyVariantCss('heading/md')}
  color: ${variables.colors.gray414};
  text-align: center;
`;

const Role = styled.div`
  ${typographyVariantCss('body/md')}
  color: ${variables.colors.gray808};
  text-align: center;
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid ${variables.colors.grayBorder};
  background: ${variables.colors.surfaceAlt};
`;

const TagText = styled.span`
  ${typographyVariantCss('label/sm')}
  color: ${variables.colors.gray414};
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ContactText = styled.div`
  ${typographyVariantCss('body/xs')}
  color: ${variables.colors.grayA0A};
`;

const TeamCard: React.FC<TeamCardProps> = ({
  imageSrc,
  name,
  role,
  tag,
  phone,
  email,
  className,
  style,
}) => {
  return (
    <Card className={className} style={style}>
      <Avatar>
        <Image src={imageSrc} alt={name} width={150} height={150} />
      </Avatar>
      <InfoStack>
        <NameRoleStack>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </NameRoleStack>
      </InfoStack>
      {tag ? (
        <Tag>
          <TagText>{tag}</TagText>
        </Tag>
      ) : null}
      {(phone || email) ? (
        <Contacts>
          {phone ? <ContactText>{phone}</ContactText> : null}
          {email ? <ContactText>{email}</ContactText> : null}
        </Contacts>
      ) : null}
    </Card>
  );
};

export default TeamCard;
