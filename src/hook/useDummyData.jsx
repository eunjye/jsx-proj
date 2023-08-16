import { useState, useEffect } from 'react';
import { dummy } from '../model/dummy';

const useDummyResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // dummy에서 결과를 가져옵니다.
    const arrResult = dummy.results;

    // 결과를 상태에 설정합니다.
    setResults(arrResult);
  }, []); // 의존성 배열이 비어 있으므로, 훅이 사용되는 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return results;
};

export default useDummyResults;
