import React from 'react';
import { Header } from 'semantic-ui-react'
import * as S from '../style';

function Title() {
  return (
    <S.Title>
        <Header as='h2' icon textAlign='center'>
            <Header.Content>ToDaBeach</Header.Content>
        </Header>
    </S.Title>
  );
}

export default Title;