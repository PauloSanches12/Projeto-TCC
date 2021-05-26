import { Header, Section, Texto, Paragrafo, Container, Conteudo, TextoSecundario, ParagrafoSecundario } from "./styles";

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
          </Conteudo>
        </Container>
      </>
  );
}

export default App;
