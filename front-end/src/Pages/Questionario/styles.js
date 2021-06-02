import styled from 'styled-components';

export const Section = styled.section`
    background: var(--top-section);
    height: 350px;
`;

export const Header = styled.header`
  height: 150px;
  font-Size: 32px;
`;

export const Texto = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
    padding-top: 20px;
    color: var(--white);
`;

export const Paragrafo = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
    color: var(--white);
`;

export const Container = styled.div`
    padding: 50px;
    margin-top: -190px;
`;

export const Conteudo = styled.div`
    background: var(--white);
    padding: 90px;
    margin: 0 250px;
    border-radius: 8px;
`;

export const TextoSecundario = styled.h2`
    margin-top: -30px;
    color: var(--colorText);
`;

export const ParagrafoSecundario = styled.p`
    color: var(--colorText);
`;

export const Ul = styled.ul`
    display: flex;

    justify-content: space-evenly;
`;

export const Li = styled.li`
    display: flex;
    text-decoration: none;
    display: inline;
    justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--top-section);
  color: var(--colorTextButton);
  margin: 0.5em 1em;
  padding: 0.75em 3em;
`;