import React from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Alert,
  IconButton,
  Table,
} from 'rsuite';

import ListItem from '../components/listItens';
import ADDiten from '../components/addIten';

const {
  Column,
  HeaderCell,
  Cell,
  Pagination,
} = Table;

class Imagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      table: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.time = setInterval(this.getData, 1000);
  }

  getData() {
    fetch('/count')
      .then((b) => b.json())
      .then((data) => {
        this.setState({ data });
        this.getTable();
      })
      .catch((err) => Alert.error(err));
  }

  getTable() {
    const { data } = this.state;
    const { count, path } = data;
    const table = [];
    function insertTable(arr) {
      const [name, value] = arr;
      table.push({ name, value });
    }
    function stringfyIten(pp, oo) {
      Object.entries(pp).forEach((item) => {
        const [name, value] = item;
        if (typeof value === 'object') {
          stringfyIten(value, `${name}/`);
        } else {
          insertTable([`${oo || ''}${name}`, value]);
        }
      });
    }
    insertTable(['*', count]);
    stringfyIten(path);
    this.setState({ table });
  }

  render() {
    const { data, table } = this.state;
    return (
      <Container>
        <div style={styles.conteiner}>
          <Table
            style={styles.table}
            autoHeight
            data={table}
          >
            <Column flexGrow={3} minWidth={200} align="right" fixed>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>
            <Column flexGrow={1} align="left" fixed>
              <HeaderCell>Value</HeaderCell>
              <Cell dataKey="value" />
            </Column>
          </Table>
        </div>
      </Container>
    );
  }
}

const styles = {
  conteiner: {
    display: 'flex',
    justifyContent: 'center',
    alignIten: 'center',
  },
  table: {
    width: '400px',
  },
};

export default Imagem;
