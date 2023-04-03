/*
    Conatainer/Presentational Pattern

    관심사 분리(SoC)를 강제하기 위한 패턴
    - 이를 통하여 비즈니스 로직에서 뷰를 분리해낼 수 있다.

    1. Presentational Components: 데이터가 어떻게 사용자에게 보여질 지에 대해서만 다루는 컴포넌트. 예제에서는 강아지 사진의 목록을 렌더링 하는 부분이다.
    2. Caontainer Components: 어떤 데이터가 보여질 지에 대해 다루는 컴포넌트. 예제에서는 강아지 사진들을 다운로드 한다.
        - React의 hooks로 대체할 수 있다.
*/

import React from 'react';
import { render } from 'react-dom';

// import DogImagesContainer from './DogImagesContainer';
import DogImages from './DogImages';

function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images
        <span role="img" aria-label="emoji">
          dog
        </span>
      </h1>
      {/* <DogImagesContainer /> */}
      {/* Hook으로 인한 DogImagesContainer 대체 */}
      <DogImages />
    </div>
  );
}

render(<App />, document.getElementById('root'));
