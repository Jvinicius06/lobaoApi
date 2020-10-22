import React from 'react';
import {
  Content,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  InputNumber,
  HelpBlock,
  Schema,
  Input,
  CheckPicker,
  Alert,
  ButtonToolbar,
  Button,
  Modal,
} from 'rsuite';

import { createNewIten } from '../models/iten';

const { NumberType, StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('It is mandatory to fill in this field!!'),
  descp: StringType().isRequired('It is mandatory to fill in this field!!'),
  quant: NumberType().min(1, 'Quantity must be greater than 0!'),
  price: NumberType().min(0, 'Quantity must be greater than 0!'),
});

function HomeButton(props) {
  const { title } = props;

  function handleClick() {
    const { onClick } = props;
    onClick()
      .then(() => {
        Alert.success('Success');
      })
      .catch((e) => {
        Alert.error(e);
      });
  }
  return (
    <Button appearance="ghost" size="lg" type="button" onClick={handleClick}>
      {title}
    </Button>
  );
}

const FileInput = (props) => {
  let myRef;
  const { id, name, onChange } = props;
  return (
    <input onChange={() => (onChange(myRef))} ref={(r) => { myRef = r; }} type="file" id={id} name={name} />
  );
};

const CustomField = (props) => {
  const {
    name,
    message,
    label,
    accepter,
    error,
  } = props;
  return (
    <FormGroup className={error ? 'has-error' : ''}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        name={name}
        accepter={accepter}
        errorMessage={error}
        {...props} // eslint-disable-line
      />
      <HelpBlock>{message}</HelpBlock>
    </FormGroup>
  );
};

class AddItenModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        price: 0.00,
        descp: '',
        quant: 0,
      },
      formError: {},
      show: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setShow = this.setShow.bind(this);
    this.form = React.createRef();
    props.setShow(this.setShow);
  }

  setShow(value) {
    const { show } = this.state;
    if (value === undefined || value == null) return show;
    this.setState({
      show: value,
    });
    return value;
  }

  handleSubmit() {
    const { onSend } = this.props;
    return new Promise((resolve, reject) => {
      const { formValue } = this.state;
      if (this.form.current.check()) {
        try {
          if (formValue.image) {
            const t = formValue.image.files[0] || null;
            createNewIten(formValue, t)
              .then(() => {
                resolve();
                this.setShow(false);
                onSend();
              })
              .catch((err) => {
                reject(err);
              });
          } else {
            throw new Error('No Image Set');
          }
        } catch (e) {
          reject(e.message);
        }
      } else {
        reject("check the data!"); // eslint-disable-line
      }
    });
  }

  render() {
    const { formError, formValue, show } = this.state;
    const sef = this;
    return (
      <Modal show={show} onHide={this.close}>
        <Modal.Header>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Content style={{
            display: 'flex',
            padding: '60px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Form
              style={{
                borderRadius: '10px',
                border: '1px solid #85d5dc',
                width: '400px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              ref={this.form}
              onChange={(v) => {
                this.setState({ formValue: v });
              }}
              onCheck={(e) => {
                this.setState({ formError: e });
              }}
              formValue={formValue}
              model={model}
            >
              <CustomField
                name="name"
                label="Product Name"
                accepter={Input}
                error={formError.name}
              />
              <CustomField
                name="marks"
                label="Marker"
                accepter={CheckPicker}
                error={formError.marks}
                style={{ display: 'inline-block', width: 300 }}
                data={[
                  { label: 'Acessórios e decorações', value: 'AD' },
                  { label: 'Arranjos e buques', value: 'AB' },
                  { label: 'Cactos e Suculentas', value: 'CS' },
                  { label: 'Flores e Platas naturais', value: 'FP' },
                  { label: 'Ervas e Temperos', value: 'ET' },
                ]}
              />
              <CustomField
                name="quant"
                label="Amount"
                accepter={InputNumber}
                error={formError.quant}
              />
              <CustomField
                name="price"
                label="Price"
                step={0.01}
                accepter={InputNumber}
                error={formError.price}
              />
              <CustomField
                name="descp"
                label="Product description"
                accepter={Input}
                error={formError.descp}
                rows={5}
                componentClass="textarea"
              />
              <CustomField
                name="image"
                label="Product description"
                accepter={FileInput}
                // error={formError.image}
              />
            </Form>
          </Content>
        </Modal.Body>
        <Modal.Footer style={{ padding: '10px' }}>
          <ButtonToolbar>
            <HomeButton onClick={this.handleSubmit} title="Submit" />
            <Button appearance="ghost" size="lg" onClick={() => { sef.setShow(false); }}>Cancel</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddItenModal;
