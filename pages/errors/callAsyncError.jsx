import { useEffect } from 'react';
import { getOperation } from '../../utils/api';

const CallAsyncErrorPage = () => {
  useEffect(function () {
    async function doTest() {
      const result = await getOperation();

      return result;
    }

    const testResult = doTest().catch((e) => {
      console.log('catched: ', e);
    });

    console.log({ testResult });
  }, []);

  return <h1>Async Error Test</h1>;
};

export default CallAsyncErrorPage;
