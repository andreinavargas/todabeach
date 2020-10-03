import React from 'react';
import * as S from '../style';

const beachList = ['Las Américas', 'vistas', 'guidos', 'las teresitas']

function Beach() {
  return (
    <div>
      <S.BeachName> {beachList[0]}</S.BeachName>
    </div>
  );
}

export default Beach;