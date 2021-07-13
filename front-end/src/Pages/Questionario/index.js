import {
  Header,
  Section,
  Texto,
  Paragrafo,
  Container,
  Conteudo,
  TextoSecundario,
  ParagrafoSecundario,
  Ul,
  Li,
  Button,
  Span
} from "./styles";
import dados from '../../dados';
import { useState, useEffect } from "react";
import api from '../../services/api';

function Questionario() {
  const [questoesSelecionadas, setQuestoesSelecionadas] = useState([])
  const [questoes, setQuestoes] = useState('');

  // console.log(dados.quiz[0].alternative[0].label);
  // console.log(questoesSelecionadas);
  useEffect(() => {
    api.get('questionnaires').then(result => {
      const response = result.data;
      const [q1, q2, q3, q4] = response[0].quiz;

      setQuestoes(response[0].quiz);
      setQuestoesSelecionadas([q1, q2, q3, q4])
    });

  }, []);

  function handleClick() {

  }

  return (
    <>
      <Section>
        <Header>
          <Texto>Teste DISC</Texto>
          <Paragrafo>Avaliação de Perfil Comportamental</Paragrafo>
        </Header>
      </Section>
      <Container>
        <Span>Questão {setQuestoes.length}/{questoes.length}</Span>
        <Conteudo>
          <TextoSecundario>Selecione o adjetivo que melhor descreve você!</TextoSecundario>
          <ParagrafoSecundario>(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</ParagrafoSecundario>
          <br />

          <Ul>
            <Li>
              {
                typeof questoesSelecionadas == 'object' ? (

                  questoesSelecionadas.map(x => {
                    x.alternative.forEach(y => (
                      console.log(y)
                    ))
                    // Object.values(x).forEach(y => (
                    //   console.log(y)
                    // ))
                  })
                )
                  :
                  console.log("nao")
              }
              {
              }

              {/* {
                questoesSelecionadas.map((q, index) => (
                  <Button onClick={handleClick} key={index}>{q.alternative}</Button>

                ))
              } */}

              {/* <Button onClick={handleClick} key={index}>{q[alternative].label}</Button> */}
              <Button > aqui</Button>
              <Button>aqui</Button>
              <Button>aqui</Button>
              <Button>aqui</Button>

            </Li>
          </Ul>


        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
