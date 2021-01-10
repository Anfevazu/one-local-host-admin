import React, { useContext } from "react";
import { Card, Row, Col, Modal, Upload, Button, Input, Form } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import FormContext from "../FormContext";

const { TextArea } = Input;

const FormFive = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)
  const { form: { files } } = context

  const { imageProfile, banners } = files
  const { previewVisible, previewImage, fileList } = imageProfile;

  const handleCancel = () => handledInput(
    {
      target:
      {
        name: 'files',
        value: {
          ...files,
          imageProfile: {
            ...imageProfile,
            previewVisible: false
          }
        }
      }
    });

  const handlePreview = (file) => {
    handledInput(
      {
        target:
        {
          name: 'files',
          value: {
            ...files,
            imageProfile: {
              ...imageProfile,
              previewImage: file.url || file.thumbUrl,
              previewVisible: true
            }
          }
        }
      });
  };

  const handleChange = ({ fileList }) => handledInput(
    {
      target:
      {
        name: 'files',
        value: {
          ...files,
          imageProfile: {
            ...imageProfile,
            fileList
          }
        }
      }
    });

  const handleChangeBanners = ({ fileList }) => handledInput(
    {
      target:
      {
        name: 'files',
        value: {
          ...files,
          banners: {
            ...banners,
            fileList
          }
        }
      }
    });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

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
            <Upload {...banners} onChange={handleChangeBanners} multiple >
              <Button>
                <UploadOutlined /> upload
              </Button>
            </Upload>
          </Card>
        </Col>
        <Col span={24}>
          <Card className="gx-card" title="Description">
            <Form.Item name="description" rules={[{ required: true, message: 'Please input your description!\'}' }]}>
              <TextArea rows={4} name="description" onChange={(e) => handledInput(e)} />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormFive;

