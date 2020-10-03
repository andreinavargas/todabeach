import React from 'react';
import * as S from '../style';

const beach = {
    "_id":{"$oid":"5f78bb724ff89920584a5051"},
    "Nº":"4",
    "zone":"norte",
    "beach":"Jardin",
    "public":"Familiar",
    "temperature":"30",
    "wind":"18 km/h",
    "hammocks":"",
    "feet_wash":"",
    "shower":"",
    "restaurants":"",
    "handicap":"",
    "bathrooms":"",
    "lifeguard":"",
    "sand_type":"negra",
    "img":"",
    "img_url":"https://www.webtenerife.com/es/que-visitar/playas/publishingimages/playa-jardin-fc.jpg"
}

function Tags() {
  return (
    <S.TagsContainer>
      <S.BigIcon name='handicap' circular />
      <S.BigIcon name='shower' circular />
      <S.BigIcon name='glass martini' circular />
      <S.BigIcon name='life ring outline' circular />
    </S.TagsContainer>
  );
}

export default Tags;