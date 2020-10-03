import React, {useState} from 'react';
import Beach from './components/Content/Beach'
import Photo from './components/Content/Photo'
import Title from './components/Content/Title'
import Tags from './components/Content/Tags';
import * as S from './components/style';



function App() {
  const [beach, setBeach] = useState("");

  fetch('http://35.228.187.107:3001/')
  .then(response => response.json())
  .then(data => {
    setBeach(data);
  })
  .catch(error =>{console.error(error)});

  return (
    <div>
     <Title></Title>
     <S.TotalContainer>
      <Photo beach={beach}></Photo>
      <Beach beach={beach}></Beach>
      <Tags beach={beach}></Tags>
    </S.TotalContainer>
    </div>
  );
}

export default App;
