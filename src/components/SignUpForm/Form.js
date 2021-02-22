import moment from "moment";
import csc from "country-state-city";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import {
  Form,
  Input,
  Carousel,
  Row,
  Col,
  Button,
  Select,
  DatePicker,
  Radio,
  Upload,
  Modal,
} from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import "./form.less";
import Item from "./Item";
import useCommon from "../../hooks/common.hook";

const langs = ["Ingles", "Español", "Portugues"];

const categories = ["Categoria 1", "Categoria 2", "Categoria 3"];

const typeDocs = ["C.C", "C.E", "P.P"];

const TYPES_HOST = ["bacan", "warn"];
const methodPays = ["Banco", "Mercado Pago"];

const FormSignUp = () => {
  const refCarousel = useRef(null);
  const { setMessage } = useCommon();
  const [city, setCity] = useState(null);
  const [index, setIndex] = useState(0);
  const [birthay, setBirthay] = useState(moment());
  const [imgProfile, setImgProfile] = useState(null);
  const [typeDoc, setTypeDoc] = useState(typeDocs[0]);
  const [countryCode, setCountryCode] = useState("CO");
  const { register, handleSubmit, watch, errors } = useForm();
  const [typeHost, setTypeHost] = useState(TYPES_HOST[0]);
  const [methodPay, setMethodPay] = useState(methodPays[0]);
  const [imgsBannerProfile, setImgsBannerProfile] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [experiens, setExperiences] = useState([
    {
      banner: null,
      description: "",
      title: "",
      tags: [],
    },
  ]);
  const [langsSelected, setLangsSelected] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  const onSubmit = (data) => {
    console.log("🚀 ~ file: Form.js ~ line 94 ~ FormSignUp ~ data", data);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    !isJpgOrPng && setMessage("You can only upload JPG/PNG file!");

    const isLt2M = file.size / 1024 / 1024 < 2;
    !isLt2M && setMessage("Image must smaller than 2MB!");

    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <div>
      {loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChangeImage = (info) => {
    setLoadingImage(info.file.status === "uploading");
  };

  const onChangeTitleExp = (e, positionExp) => {
    const prevExperiences = experiens;
    prevExperiences[positionExp].title = e.target.value;
    setExperiences(prevExperiences);
  };

  const onChangeDescriptionExp = (e, positionExp) => {
    const prevExperiences = experiens;
    prevExperiences[positionExp].description = e.target.value;
    setExperiences(prevExperiences);
  };

  const onChangeTagsExp = (value, positionExp) => {
    const prevExperiences = experiens;
    prevExperiences[positionExp].tags = value;
    setExperiences(prevExperiences);
  };

  const items = [
    {
      title: "Cual es tu nombre",
      field: (
        <Input
          className="input-form-signup"
          itemRef={register}
          re
          size="large"
          name="name"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Cual es tu apellido",
      field: (
        <Input
          className="input-form-signup"
          itemRef={register}
          size="large"
          name="lastname"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Cual es tu correo",
      field: (
        <Input
          className="input-form-signup"
          itemRef={register}
          type="email"
          size="large"
          name="email"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Pais",
      field: (
        <Select
          style={{ width: "100%" }}
          onChange={(opt) => {
            setCountryCode(opt);
          }}
          defaultValue={countryCode}
          showSearch
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {csc.getAllCountries().map((country) => (
            <Select.Option value={country.isoCode}>
              {`${country.flag} ${country.name}`}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Telefono",
      field: (
        <Input
          className="input-form-signup"
          itemRef={register}
          type="text"
          size="large"
          name="phone"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Facebook",
      field: (
        <Input
          className="input-form-signup"
          type="text"
          size="large"
          prefix={<FacebookOutlined />}
          itemRef={register}
          name="facebook"
          placeholder="¿Como quieres que te llamemos?"
        />
      ),
    },
    {
      title: "Twitter",
      field: (
        <Input
          className="input-form-signup"
          type="text"
          size="large"
          prefix={<TwitterOutlined />}
          itemRef={register}
          name="twitter"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Instagram",
      field: (
        <Input
          className="input-form-signup"
          type="text"
          size="large"
          prefix={<InstagramOutlined />}
          itemRef={register}
          name="instagram"
          placeholder="Escribe aqui tu respuesta"
        />
      ),
    },
    {
      title: "Fecha de nacimiento",
      field: (
        <DatePicker
          style={{ width: "100%" }}
          value={birthay}
          onChange={(d) => {
            setBirthay(d);
          }}
        />
      ),
    },
    {
      title: "Direccion",
      field: (
        <Input
          className="input-form-signup"
          itemRef={register}
          type="text"
          size="large"
          name="instagram"
          placeholder="¿Como quieres que te llamemos?"
        />
      ),
    },
    {
      title: "Ciudad",
      field: (
        <Select
          style={{ width: "100%" }}
          onChange={(opt) => setCity(opt)}
          showSearch
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {csc.getCitiesOfCountry(countryCode).map((cityOpt) => (
            <Select.Option value={`${cityOpt.name}-${cityOpt.stateCode}`}>
              {cityOpt.name}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Tipo de Host",
      field: (
        <Radio.Group
          onChange={(e) => setTypeHost(e.target.value)}
          value={typeHost}
        >
          {TYPES_HOST.map((t) => (
            <Radio value={t}>{t.toUpperCase()} Host</Radio>
          ))}
        </Radio.Group>
      ),
    },
    ...experiens.map((exp, positionExp) => {
      return {
        title: `Experiencia ${positionExp + 1}`,
        field: (
          <div
            className="container-experience-signup-form"
            key={`exp${positionExp}`}
          >
            <Row>
              <Upload
                name="banner"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChangeImage}
              >
                {exp.banner ? (
                  <img src={exp.banner} alt="avatar" />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Row>
            <Row>
              <Input
                className="input-form-signup"
                type="text"
                size="large"
                name="instagram"
                onChange={(e) => onChangeTitleExp(e, positionExp)}
                placeholder="¿Como quieres que te llamemos?"
              />
            </Row>
            <Row>
              <Input.TextArea
                className="input-form-signup"
                row={3}
                type="text"
                size="large"
                name="instagram"
                onChange={(e) => onChangeDescriptionExp(e, positionExp)}
                placeholder="¿Como quieres que te llamemos?"
              />
            </Row>
            <Row>
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
                onChange={(e) => onChangeTagsExp(e, positionExp)}
              >
                {exp.tags.map((t, i) => (
                  <Select.Option key={`exp${positionExp}_tag${i}`}>
                    {t}
                  </Select.Option>
                ))}
              </Select>
            </Row>
            <Row>
              <Col span={12}>
                <Button
                  onClick={() => {
                    const prevExperiences = experiens;
                    prevExperiences.push({
                      banner: null,
                      description: "",
                      title: "",
                      tags: [],
                    });
                    setExperiences(prevExperiences);
                    next();
                  }}
                  type="primary"
                >
                  Agregar Experiencia
                </Button>
              </Col>
              <Col span={12}>
                {positionExp > 0 && (
                  <Button
                    onClick={() => {
                      const prevExperiences = experiens;
                      prevExperiences.splice(positionExp, 1);
                      setExperiences(prevExperiences);
                      prev();
                    }}
                    type="default"
                  >
                    Eliminar esta experiencia
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        ),
      };
    }),
    {
      title: "¿Que idiomas hablas?",
      field: (
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Seleccion"
          defaultValue={langsSelected}
          onChange={setLangsSelected}
        >
          {langs.map((lgs) => (
            <Select.Option value={lgs}>{lgs}</Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Categoria",
      field: (
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Seleccion"
          defaultValue={categoriesSelected}
          onChange={setCategoriesSelected}
        >
          {categories.map((cat) => (
            <Select.Option value={cat}>{cat}</Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Perfil",
      field: (
        <div className="container-experience-signup-form">
          <Row>
            <label>Foto de perfil</label>
            <Upload
              name="banner"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChangeImage}
            >
              {imgProfile ? (
                <img src={imgProfile} alt="avatar" />
              ) : (
                uploadButton
              )}
            </Upload>
          </Row>
          <Row>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={imgsBannerProfile}
              beforeUpload={beforeUpload}
              onChange={handleChangeImage}
            >
              {imgsBannerProfile.length >= 8 ? null : uploadButton}
            </Upload>
          </Row>
          <Row>
            <Input.TextArea
              className="input-form-signup"
              itemRef={register}
              style={{ width: "100%" }}
              row={3}
              type="text"
              size="large"
              name="descriptionProfile"
              placeholder="Describete en al menos 100 caracteres"
              showCount
            />
          </Row>
        </div>
      ),
    },
    {
      title: "Documentacion",
      field: (
        <div className="container-experience-signup-form">
          <Row>
            <label>Tipo de documento</label>
            <Select
              style={{ width: "100%" }}
              value={typeDoc}
              onChange={setTypeDoc}
              showSearch
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {typeDocs.map((tdni) => (
                <Select.Option value={tdni}>{tdni}</Select.Option>
              ))}
            </Select>
          </Row>
          <Row>
            <Input
              className="input-form-signup"
              size="large"
              itemRef={register}
              name="dni"
              placeholder="Numero de identificacion"
            />
          </Row>
        </div>
      ),
    },
    {
      title: "Informacion para pagos",
      field: (
        <div className="container-experience-signup-form">
          <Row>
            <Radio.Group
              onChange={(e) => setMethodPay(e.target.value)}
              value={methodPay}
            >
              {methodPays.map((m) => (
                <Radio.Button value={m}>{m}</Radio.Button>
              ))}
            </Radio.Group>
          </Row>
          {methodPay === methodPays[0] && (
            <>
              <Row>
                <Input
                  className="input-form-signup"
                  size="large"
                  name="bank"
                  placeholder="Banco"
                  itemRef={register}
                />
              </Row>
              <Row>
                <Input
                  className="input-form-signup"
                  size="large"
                  itemRef={register}
                  name="numberAccount"
                  placeholder="Numero de cuenta"
                />
              </Row>
              <Row>
                <label>Tipo de cuenta</label>
                <Select
                  style={{ width: "100%" }}
                  showSearch
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Select.Option>Ahorros</Select.Option>
                  <Select.Option>Corriente</Select.Option>
                </Select>
              </Row>
            </>
          )}
          {methodPay === methodPays[1] && (
            <Row>
              <Input
                className="input-form-signup"
                size="large"
                type="email"
                itemRef={register}
                name="emailMercadopago"
                placeholder="Email registrado en MercadoPago"
              />
            </Row>
          )}
        </div>
      ),
    },
  ];

  const prev = () => {
    refCarousel.current.goTo(index - 1);
    setIndex(index - 1);
  };

  const next = () => {
    refCarousel.current.goTo(index + 1);
    setIndex(index + 1);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-signup">
      <Carousel swipe={false} ref={refCarousel}>
        {items.map((item, i) => (
          <Item {...item} position={i + 1} />
        ))}
      </Carousel>
      <Row>
        <Col span={20}>
          <Button onClick={prev} disabled={index === 0} type="default">
            Atras
          </Button>
        </Col>
        <Col span={4}>
          {index === items.length - 1 ? (
            <Button type="primary" onClick={handleSubmit(onSubmit)} >
              Enviar
            </Button>
          ) : (
            <Button
              disabled={index === items.length - 1}
              type="primary"
              onClick={next}
            >
              Siguiente
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default FormSignUp;
