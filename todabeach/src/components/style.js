import React from 'react';
import styled from '@emotion/styled';
import { Image, Container, Icon } from 'semantic-ui-react';

export const BeachImage = styled(Image)`
  align-items: center;
  margin-bottom: 20px;
  `;

export const BeachName = styled.div`
  font-size: 100px;
  font-family: Droid Sans;
`;

export const TagsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Title = styled(Container)`
    margin-top: 20px;
`;

export const BigIcon = styled(Icon)`
    font-size: 3em !important;
`;