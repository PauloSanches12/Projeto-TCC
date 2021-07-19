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
  const [questionSelected, setQuestoesSelecionadas] = useState(null);
  const [questoes, setQuestoes] = useState([]);
  const [amountQuestion, setAmountQuestion] = useState(0);

  useEffect(() => {
    api.get('questionnaires').then(result => {
      const response = result.data;
      const responseQuestions = response[0].quiz;

      console.log(responseQuestions[0]);
      setQuestoesSelecionadas(responseQuestions[0]);
      setQuestoes(response[0].quiz);
    });

  }, []);

  function handleAmountQuestion() {

    if (amountQuestion < questoes.length) {
      setAmountQuestion(() => amountQuestion + 1);
      // console.log(amountQuestion)
    }
  }

  function handleSelectedQuestion(questionId, alternativeId) {
    setQuestoes((params) => {
      const newParams = params.map((question) => {
        if (questionId === question._id) {
          console.log(questionId);
          const newQuestions = question.alternatives.map(alternative => {
            if (alternativeId === alternative._id) {
              alternative.isSelected = true;
              handleAmountQuestion();
              return alternative
            }
            return alternative
          })
          return newQuestions;
        }
        return question;
      })
      return newParams;
    })
  }

  useEffect(() => console.log(questoes), [questoes])

  return (
    <>
      <Section>
        <Header>
          <Texto>Teste DISC</Texto>
          <Paragrafo>Avaliação de Perfil Comportamental</Paragrafo>
        </Header>
      </Section>
      <Container>
        <Span>Questão {amountQuestion + 1}/{questoes.length}</Span>
        <Conteudo>
          <TextoSecundario>Selecione o adjetivo que melhor descreve você!</TextoSecundario>
          <ParagrafoSecundario>(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</ParagrafoSecundario>
          <br />

          <Ul>
            <Li>

              {
                questionSelected !== null && (

                  questionSelected.alternatives.map((alternative) => (
                    <Button key={alternative._id} onClick={() => handleSelectedQuestion(questionSelected._id, alternative._id)}>{alternative.label}</Button>
                  ))
                )
              }


            </Li>
          </Ul>

        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
