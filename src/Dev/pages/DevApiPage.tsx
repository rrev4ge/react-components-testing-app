import React, { useState } from 'react';
import { Card, Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { PageTemplate } from '../../components';

const prettyJson = (obj: any) => JSON.stringify(obj, null, 2);

const DevApiPage = () => {
  const [resultData, setResultData] = useState<string | undefined>(undefined);

  const fetchTranslationList = () => {
    console.log('fetchTranslations()');
    // services.translations
    //   .get()
    //   .then((result) => {
    //     // getConvertStatus().then((result: IApiConvertStatus) => {
    //     console.log('result', result.data);
    //     const s = prettyJson(result.data);
    //     console.log(s);
    //     setResultData(s);
    //   })
    //   .catch((error) => {
    //     console.log('catch', error);
    //     const s = prettyJson(error);
    //     setResultData(s);
    //     // handleApiError(appContext, error);
    //   });
  };

  return (
    <PageTemplate title="Api">
      <Card>
        <Button.Group>
          <Button className="converter-status-button" onClick={fetchTranslationList}>
            TransList
          </Button>
        </Button.Group>
      </Card>
      <Input.TextArea style={{ width: '100%', height: '400px' }} value={resultData} />
    </PageTemplate>
  );
};

export default observer(DevApiPage);
