import { Header, Section, Texto, Paragrafo, Container, Conteudo, TextoSecundario, ParagrafoSecundario, Ul, Li, Button } from "./styles";

function App() {
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
            <br/>
            <Ul>
              <Li>
                <Button>Próximo</Button>
              </Li>
              <Li>
                <Button>Próximo</Button>
              </Li>
              <Li>
                <Button>Próximo</Button>
              </Li>
              <Li>
                <Button>Próximo</Button>
              </Li>
            </Ul>
          </Conteudo>
        </Container>
      </>
  );
}

export default App;
