import React from 'react';
import { Container } from 'semantic-ui-react';
import * as S from '../style';


function Photo({beach}) {
  return (
    <Container>
        <S.BeachImage src='https://images.unsplash.com/photo-1599243526885-0e243b58e674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' size='small' centered circular />
    </Container>
  );
}

export default Photo;