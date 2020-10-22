import React from 'react';
import {
  Content,
  Panel,
  List,
  Button,
} from 'rsuite';

import Confirm from './confirm';
import { deleteIten } from '../models/iten';

const defaultCard = [
  { kind: 'quant', tag: 'Amount' },
  { kind: 'price', tag: 'Price' },
  { kind: 'marks', tag: 'Marks' },
  { kind: 'descp', tag: 'Description' },
  { kind: '_id', tag: 'ID' },
];

const Card = (props) => {
  const { data, confirm, reload } = props;
  const path = data.image_path.substring(8);
  const onDelete = (id) => {
    confirm.current.init('are you sure you want to delete this item from the database. the data will be lost and it will not be possible to recover it!', (cc) => {
      if (cc) {
        deleteIten(id);
        reload();
      }
    });
  };
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 340, margin: '15px 10px' }}>
      <img src={`imagem/${path}`} height="340" alt={data.name} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <Panel header={data.name}>
        <List>
          {
            defaultCard.map((item) => {
              const dd = data[item.kind] || 'undefined';
              return (
                <List.Item key={dd} index={dd}>
                  {`${item.tag}: ${dd}`}
                </List.Item>
              );
            })
          }
        </List>
        <Button onClick={() => { onDelete(data._id); }} style={{ marginTop: '15px' }} block appearance="ghost" size="lg">Delete</Button>
      </Panel>
    </Panel>
  );
};

const ListItens = (props) => {
  const { data, reload } = props;
  const confirm = React.createRef();
  return (
    <Content style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}
    >
      <Confirm ref={confirm} />
      {
        data.map((item) => <Card reload={reload} data={item} confirm={confirm} />)
      }
    </Content>
  );
};

export default ListItens;
