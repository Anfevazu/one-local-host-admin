import React, { useContext, useState } from "react";
import { Card, Form, Input, DatePicker, Row, Col } from "antd";
import FormContext from "../FormContext";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const FormOne = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)
  const [state, setState] = useState({ address: '' })

  const onChange = (date, dateString) => handledInput({ target: { name: 'birthdate', value: dateString } })

  const handleChange = (address) => {
    setState({ address });
  }

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }} justify="center" align="middle">
        <Col span={24}>
          <Card style={{ marginBottom: "0px" }} className="gx-card" title="Form One">
            <Row justify="space-around">
              <Col span={10}>
                <Form.Item name="firstName" rules={[{ required: true, message: 'Please input your First Name!\'}' }]}>
                  <Input placeholder="First Name" name="firstName" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="lastName">
                  <Input placeholder="Last Name" name="lastName" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your E-mail!\'}' }, { type: 'email', message: 'The input is not valid E-mail!' }]}>
                  <Input placeholder="E-mail" name="email" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="countryCode">
                  <Input type="number" placeholder="Country Code" name="countryCode" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="phone">
                  <Input type="number" placeholder="Phone" name="phone" onChange={(e) => handledInput(e)} />
                </Form.Item>

              </Col>
              <Col span={10}>
                <Form.Item name="accountFacebook">
                  <Input placeholder="Facebook" name="accountFacebook" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="accountGoogle">
                  <Input placeholder="Google" name="accountGoogle" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="accountTwitter">
                  <Input placeholder="Twitter" name="accountTwitter" onChange={(e) => handledInput(e)} />
                </Form.Item>
                <Form.Item name="birthdate" rules={[{ required: true, message: 'Please input your Birthdate!\'}' }]}>
                  <DatePicker className="gx-mb-3 gx-w-100" onChange={onChange} />
                </Form.Item>
                <Form.Item name="address" rules={[{ required: true, message: 'Please input your Address!' }]}>
                  {/* <Input placeholder="Address" name="address" onChange={(e) => handledInput(e)} /> */}
                  <PlacesAutocomplete
                    value={state.address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    noStyle
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </Form.Item>
                {/* <Form.Item name="country" rules={[{ required: true, message: 'Please input your Country!\'}' }]}>
              <Input placeholder="Country" name="country" onChange={(e) => handledInput(e)} />
            </Form.Item> */}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormOne;

