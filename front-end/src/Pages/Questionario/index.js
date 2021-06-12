import { Header, Section, Texto, Paragrafo, Container, Conteudo, TextoSecundario, ParagrafoSecundario, Ul, Li, Button } from "./styles";
import dados from '../../dados';
import { useState, useEffect } from "react";
import api from '../../services/api';

function Questionario() {

  const [questoes, setQuestoes] = useState(0);
  const [listQuestionnaire, setListQuestionnaire] = useState([]);

  function handleAnswerButtonClick() {
    const tamanhoObjeto = Object.keys(setListQuestionnaire).length;
    const proximaQuestao = questoes + 1;

    if (proximaQuestao < tamanhoObjeto) {
      setQuestoes(proximaQuestao);
    } else {
      alert("Fim")
    }
  }
  

  useEffect(() =>{
    async function loadQuestionnaire(){
      const response = await api.get('/questionnaires');
      setListQuestionnaire(response.data);
    }

    loadQuestionnaire();
  }, []);
  // console.log(listQuestionnaire);
  return (
    <>
      <Section>
        <Header>
          <Texto>Teste DISC</Texto>
          <Paragrafo>Avaliação de Perfil Comportamental</Paragrafo>
        </Header>
      </Section>
      <Container>
        <Conteudo>
          <TextoSecundario>Selecione o adjetivo que melhor descreve você!</TextoSecundario>
          <ParagrafoSecundario>(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</ParagrafoSecundario>
          <br />

          <Ul>
            <Li>
              <Button>Proximo</Button>
              <Button>Proximo</Button>
              <Button>Proximo</Button>
              <Button>Proximo</Button>
            </Li>

            {/* {
              questionarioq.quiz.map((data) => (
                <Li key={questionarioq.quiz}>
                  <Button onClick={handleAnswerButtonClick}>{data.replace(',', ' ').replace(', ', ' ')}</Button>
                </Li>

              ))
            } */}
          </Ul>
        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
