import React from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Alert,
  IconButton,
} from 'rsuite';

import ListItem from '../components/listItens';
import ADDiten from '../components/addIten';

class Imagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.time = setInterval(this.getData, 600);
  }

  getData() {
    fetch('/items')
      .then((b) => b.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => Alert.error(err));
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Header className="rs-panel-shaded" style={{ zIndex: 999 }}>
          <Icon icon="dashboard" size="lg" style={{ verticalAlign: 0 }} />
          <span style={{ marginLeft: 12, fontSize: 18 }}>Dashboard</span>
        </Header>
        <Container>
          <Content style={{ padding: '15px' }}>
            <IconButton onClick={() => { this.setShow(!this.setShow()); }} style={{ margin: '20px' }} size="lg" icon={<Icon size="lg" icon="plus" />} appearance="primary" />
            <ListItem reload={this.getData} data={data} />
            <ADDiten setShow={(e) => { this.setShow = e; }} onSend={() => { this.getData(); }} />
          </Content>
        </Container>
      </Container>
    );
  }
}

export default Imagem;
