import React, { useState } from "react";
import { Card, Row, Col, Modal, Upload, Button, Input } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";

const {TextArea} = Input;

const FormFive = () => {

  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    fileList: [],
  })
  const { previewVisible, previewImage, fileList } = state;

  const handleCancel = () => setState({ previewVisible: false });

  const handlePreview = (file) => {
    setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  const handleChange = ({ fileList }) => setState({ fileList });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture'
  };

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }}>
        <Col span={24}>
          <Card className="gx-card clearfix" title="Image Profile">
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Card>
        </Col>
        <Col span={24}>
          <Card className="gx-card" title="Banner List">
            <Upload {...props}>
              <Button>
                <UploadOutlined /> upload
              </Button>
            </Upload>
          </Card>
        </Col>
        <Col span={24}>
          <Card className="gx-card" title="Description">
            <TextArea rows={4}/>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormFive;

