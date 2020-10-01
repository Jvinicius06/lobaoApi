import React from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Panel,
  IconButton,
  PanelGroup,
} from 'rsuite';

class Imagem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header className="rs-panel-shaded" style={{ zIndex: 999 }}>
          <Icon icon="dashboard" size="lg" style={{ verticalAlign: 0 }} />
          <span style={{ marginLeft: 12, fontSize: 18 }}>Dashboard</span>
        </Header>
        <Container>
          <Content style={{ padding: '10px' }}>
          <PanelGroup>
            <Panel header="Adicionar um novo item">
              <IconButton style={{ transform: 'scale(2)' }} icon={<Icon icon="plus-square-o" size="lg" />} />
            </Panel>
            <Panel header="Item existentes">
            </Panel>
          </PanelGroup>
          </Content>
        </Container>
      </Container>
    );
  }
}

export default Imagem;
