import { Header, Section, Texto, Paragrafo, Container, Conteudo, TextoSecundario, ParagrafoSecundario, Ul, Li, Button } from "./styles";
import dados from '../../dados';

function Questionario() {
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
            {
              dados.map(data => (
                <Li key={data.name}>
                  <Button>{data.name}</Button>
                </Li>

              ))
            }
           
            {/* <Li>
              <Button>Próximo</Button>
            </Li>
            <Li>
              <Button>Próximo</Button>
            </Li>
            <Li>
              <Button>Próximo</Button>
            </Li> */}
          </Ul>
        </Conteudo>
      </Container>
    </>
  );
}

export default Questionario;
