import { Header, Section, Texto, Paragrafo, Container, Conteudo, TextoSecundario, ParagrafoSecundario, Ul, Li, Button } from "./styles";
import dados from '../../dados';
import { useState, useEffect } from "react";
import api from '../../services/api';

function Questionario() {
  const [questoesSelecionadas, setQuestoesSelecionadas] = useState([])
  const [questoes, setQuestoes] = useState('');

  // useEffect(() => {
  //   api.get('questionnaires').then(result => {
  //     const response = result.data;
  //     const [quizSelected, a, b, c] = response[0].quiz;
  //     setQuestoes(response[0].quiz);
  //     setQuestoesSelecionadas([quizSelected, a, b, c])
  //   });

  // }, []);

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
      <span>Questão {setQuestoes.length} </span>/{questoes.length / 4}
      <Container>
        <Conteudo>
          <TextoSecundario>Selecione o adjetivo que melhor descreve você!</TextoSecundario>
          <ParagrafoSecundario>(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</ParagrafoSecundario>
          <br />

          <Ul>
            <Li>

              {/* {
                questoesSelecionadas.map((q, index) => (
                  <Button onClick={handleClick} key={index}>{q}</Button>
                ))
              } */}
            </Li>
          </Ul>


        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
