import React from 'react';
import {SomeComponent} from "widgets/SomeComponent";

const MainPage = () => {
  return (
    <div className={'page-wrapper'}>
      <SomeComponent size={'huge'}>
        TEXT
      </SomeComponent>
    </div>
  );
};

export default MainPage;