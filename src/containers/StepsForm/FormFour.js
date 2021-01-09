import React, { useContext, useEffect, useState } from "react";
import { Card, Row, Col, Checkbox } from "antd";
import FormContext from "../FormContext";
import { getLanguages } from "../../services/firebase/languages";
import { getExperiences } from "../../services/firebase/categories";

const CheckboxGroup = Checkbox.Group;

const FormFour = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)
  const { form } = context

  const [optionsLanguages, setOptionsLanguage] = useState(null)
  const [optionsCategories, setOptionsCategories] = useState([])

  const onChange = (checkedValues) => {
    handledInput({ target: { name: 'languages', value: checkedValues } })
  }

  const onChangeCategories = (checkedValues) => {
    handledInput({ target: { name: 'categories', value: checkedValues } })
  }

  useEffect(() => {
    getLanguages().then(({ language }) => setOptionsLanguage(language.map(item => ({ label: item, value: item }))))
    getExperiences().then(docs => docs.forEach(doc => setOptionsCategories(result => [...result, { label: doc.data().name, value: doc.data().name }])))
  }, [])

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }}>
        <Col span={12}>
          <Card className="gx-card" title="Languages">
            <CheckboxGroup options={optionsLanguages} defaultValue={form.languages} onChange={onChange} />
          </Card>
        </Col>

        <Col span={12}>
          <Card className="gx-card" title="Categories">
            <CheckboxGroup options={optionsCategories} defaultValue={form.categories} onChange={onChangeCategories} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormFour;

