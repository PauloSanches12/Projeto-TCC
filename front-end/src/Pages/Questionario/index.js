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
  const [proximaQuestao, setProximaQuestao] = useState(0);

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
    const proxima = proximaQuestao + 1;
    if (proxima < questoes.length) {
      setProximaQuestao(proxima);
      console.log(proxima)
    }
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
        <Span>Questão {proximaQuestao + 1}/{questoes.length}</Span>
        <Conteudo>
          <TextoSecundario>Selecione o adjetivo que melhor descreve você!</TextoSecundario>
          <ParagrafoSecundario>(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</ParagrafoSecundario>
          <br />

          <Ul>
            <Li>

              {
                questoesSelecionadas.map((x, index) => (
                  <Button key={index} onClick={() => handleClick()}> {x.alternative[0].label}</Button>
                ))
              }

            </Li>
          </Ul>


        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
