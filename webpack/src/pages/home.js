import React from 'react';
import {
  Container,
  Panel,
} from 'rsuite';

import image from '../pp.png';

function Home() {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      padding: '30px',
      width: '100%',
      height: 'auto',
    }}
    >
      <Panel shaded bordered bodyFill style={{ display: 'flex', width: '400px' }}>
        <img src={image} height="400px" />
        <Panel header="Floricultura Lobão">
          <p>
            <small>
              O propósito deste é mostrar o desenvolvimento de um sistema móvel para
              plataforma Android, com proposta dedicada exclusivamente para as vendas de uma
              floricultura, com o intuito de oferecer um serviço diferenciado conciliando as
              facilidades oferecidas pelo comercio eletrônico, e com base na dificuldade de
              vendas devido a pandemia da Covid-19, a ideia é apresentar um aplicativo confiável
              e eficaz para vendas serem facilitadas.
            </small>
          </p>
        </Panel>
      </Panel>
    </Container>
  );
}

export default Home;
