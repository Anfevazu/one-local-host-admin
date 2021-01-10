import React, { useState, useContext, useEffect } from "react";
import FormContext from './FormContext'
import { Button, Card, Steps, Form, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { uploadFile } from '../services/firebase/storage'
import { getHoust } from '../services/firebase/houst'
import { useSelector } from "react-redux";
import FormOne from './StepsForm/FormOne'
import FormTwo from './StepsForm/FormTwo'
import FormThree from './StepsForm/FormThree'
import FormFour from "./StepsForm/FormFour";
import FormFive from "./StepsForm/FormFive";
import FormSix from "./StepsForm/FormSix";
import FormSeven from "./StepsForm/FormSeven";

import "./index.css";

const steps = [
  {
    title: 'Information',
    content: <FormOne />,
  },
  {
    title: 'Type Host',
    content: <FormTwo />,
  },
  {
    title: 'Experiences',
    content: <FormThree />,
  },
  {
    title: 'Language',
    content: <FormFour />,
  },
  {
    title: 'Banners',
    content: <FormFive />,
  },
  {
    title: 'Identity',
    content: <FormSix />,
  },
  {
    title: 'Payment',
    content: <FormSeven />,
  }
];
const Step = Steps.Step;

const Register = () => {
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);
  const formContext = useContext(FormContext)
  const history = useHistory();
  const handledInput = (e) => formContext.setInput(e)
  const { form } = formContext
  const [state, setState] = useState({
    current: 0,
  });
  const [bannerList, setBannerList] = useState([])

  const next = () => {
    const current = state.current + 1;
    setState({ current });
  }

  const prev = () => {
    const current = state.current - 1;
    setState({ current });
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async () => {
    // upload image profile
    const PATH_IMAGE_PROFILE = 'profiles'
    const { metadata: { fullPath } } = await uploadFile(form.files.imageProfile.fileList[0].originFileObj, PATH_IMAGE_PROFILE)
    handledInput({ target: { name: 'pathImageProfile', value: fullPath } })

    // upload banners
    const PATH_BANNERS = 'banners'
    const { files: { banners } } = form
    const pushFiles = banners.fileList.map(async (file) => {
      const { metadata: { fullPath } } = await uploadFile(file.originFileObj, PATH_BANNERS)
      bannerList.push(fullPath)
    })

    try {
      await Promise.all(pushFiles);
      handledInput({ target: { name: 'pathBannerList', value: bannerList } })
    } catch (e) {
      console.log(e)
    }

    /* const washingtonRef = db.collection("cities").doc("DC");

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        capital: true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    }); */
  };

  useEffect(() => {
    if (authUser === null) {
      history.push('/login');
    }
  });

  return (
    <Row justify="center" align="middle">
      <Col span={18}>
        <Card className="gx-card" title="Switch Step">
          {<Steps current={state.current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>}
          <Form
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
          >
            <div className="steps-content">{steps[state.current].content}</div>
            <div className="steps-action">
              {
                state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => next()}>Next</Button>
              }
              {
                state.current === steps.length - 1
                &&
                <Button type="primary" htmlType="submit">
                  Done
              </Button>
              }
              {
                state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                  Previous
            </Button>
              }
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
