import {
  Form,
  Input,
  Tooltip,
  InputNumber,
  Select,
  Row,
  Col,
  Checkbox,
  Button
} from "antd";
import { QuestionCircleOutlined, SendOutlined } from "@ant-design/icons";

import Wrapper from "../components/layout/layout";
import Content from "../components/layout/content";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  }
};

const tailItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 18,
      offset: 6
    },
    sm: {
      span: 24
    }
  }
};

export default () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+49</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Wrapper>
      <Content>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <h2>Best. Headline. Ever.</h2>
            <h3>
              Minim non id ipsum cillum pariatur id ipsum culpa incididunt qui
              dolor.
            </h3>
            <p>
              Magna sint elit exercitation incididunt non Lorem nisi adipisicing
              est amet sunt sunt nulla. Occaecat cillum voluptate officia ipsum
              laboris elit cupidatat adipisicing proident id eu. Enim
              reprehenderit est mollit eiusmod. Ullamco cupidatat aute dolor
              Lorem sit in ipsum irure incididunt enim nostrud sint. Et laboris
              commodo id laborum deserunt est magna cillum sint excepteur et. Do
              ad ad elit aliqua eiusmod nulla eiusmod ea mollit.
            </p>
            <h3>Fugiat ea sint quis est nulla amet.</h3>
            <p>
              Labore veniam fugiat exercitation commodo quis velit nisi sit
              fugiat pariatur duis id laborum laborum. Sint voluptate enim
              ullamco elit occaecat occaecat pariatur adipisicing culpa. Nulla
              incididunt id minim quis occaecat tempor et est veniam.
            </p>
            <p>
              Eu cillum consequat ipsum nisi tempor eu ullamco enim magna. Non
              proident quis duis mollit culpa. Duis incididunt aliqua laboris
              sunt sunt velit Lorem amet voluptate.
            </p>
          </Col>
          <Col xs={24} md={12}>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "49"
              }}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label={
                  <span>
                    Name&nbsp;
                    <Tooltip title="Vor- und Nachname">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deinen vollen Namen ein!",
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-Mail"
                rules={[
                  {
                    type: "email",
                    message: "Das ist keine valide E-Mail!"
                  },
                  {
                    required: true,
                    message: "Bitte gib deine E-Mail ein!"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Telefonnummer"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deine Telefonnummer ein!"
                  }
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%"
                  }}
                />
              </Form.Item>

              <Form.Item
                name="street"
                label="Straße"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deine Straße ein!"
                  }
                ]}
                {...formItemLayout}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="housenumber"
                label="Hausnummer"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deine Hausnummer ein!"
                  }
                ]}
                {...formItemLayout}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name="postcode"
                label="Postleitzahl"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deine Postleitzahl ein!"
                  }
                ]}
                {...formItemLayout}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="city"
                label="Stadt"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib deine Stadt ein!"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="title"
                label="Titel"
                rules={[
                  {
                    required: true,
                    message: "Bitte gib einen Titel ein!"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="text" label="Text">
                <Input.TextArea
                  rows={5}
                  placeholder="Aus welcher Region sind Bewerbungen erwünscht?	Wer oder WAS wird gesucht? Wie lange  wird der Bewerber benötigt? Und wann wird der Bewerber benötigt? Was bekommt der Bewerber als Gegenleistung?"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            "Bitte stimme den Datenschutzbestimmungen zu"
                          )
                  }
                ]}
                {...tailItemLayout}
              >
                <Checkbox>
                  Ich stimme den <a href="">Datenschutzbestimmungen</a> zu
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                >
                  Gesuch erstellen
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
};
