import random

dic = {11: 'Sociável', 12: 'Atencioso', 14: 'Controlado', 18: 'Enérgico', \
       21: 'Convincente', 22: 'Competitivo', 24: 'Doador', 28: 'Submisso', \
       31: 'Estimulante', 32: 'Respeitoso', 34: 'Reservado', 38: 'Habilidoso', \
       41: 'Sensível', 42: 'Autossuficiente', 44: 'Satisfeito', 48: 'Espirituoso', \
       51: 'Planejador', 52: 'Positivo', 54: 'Paciente', 58: 'Charmoso', \
       61: 'Seguro', 62: 'Espontâneo', 64: 'Organizado', 68: 'Tímido'}


# só tem as questões de 1 a 6
# precisa preencher com as 20 questoes - número da questão seguido de 1,2,4,8
# veja que no seu apendice a 2 e a 3 estao iguais

def criapesos():
    arq = open('respostasalunos.csv', 'r')
    conteudo = arq.read()
    listaDeLinhas = conteudo.split('\n')
    # print(listaDeLinhas)
    dicpeso = {}
    for i in listaDeLinhas:
        listaTemp = i.split(';')
        # print(listaTemp)
        if listaTemp[1] == '1':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 1

        elif listaTemp[1] == '2':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.9

        elif listaTemp[1] == '3':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.8

        elif listaTemp[1] == '4':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.7

        elif listaTemp[1] == '5':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.6

        if listaTemp[1] == '6':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.5

        elif listaTemp[1] == '7':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.4

        elif listaTemp[1] == '8':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.3

        elif listaTemp[1] == '9':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.2

        elif listaTemp[1] == '10':
            for j in listaTemp[2:]:
                dicpeso[j] = dicpeso.get(j, 0) + 0.1

    # for k in sorted(dicpeso,key=dicpeso.get):
    # print(k,round(dicpeso[k],1))

    return dicpeso


def criaPopulacao():
    # Está criando uma populacao com 10 individuos
    populacao = []
    possiveisRespostas = ['0001', '0010', '0100', '1000']
    for i in range(10):
        individuo = ''  # observa que individuo é uma string
        for j in range(6):  # vai trocar isso por 20 depois
            # Cada individuo está com respostas para 6 questões

            # 0 a opção não foi escolhida, 1 a opção foi escolhida
            respostaSorteada = random.randrange(0, 4)
            individuo += possiveisRespostas[respostaSorteada]
        # print(individuo)
        populacao.append(individuo)
    return populacao


def traduzPopulacao(populacao):
    individuo = 0
    for i in populacao:  # anda indivíduo a indivíduo
        individuo += 1
        print('Indivíduo: ', individuo)
        questao = 0
        for j in range(0, len(i), 4):  # pega as respostas de cada indivíduo por questão
            questao += 1
            print('Questao:', questao)
            print(i[j:j + 4])  # a resposta em binário
            decimal = int(i[j:j + 4], 2)
            print(decimal)  # a resposta em decimal: ou 1 ou 2 ou 4 ou 8
            resposta = int(str(questao) + str(decimal))  # junta a questão com a resposta em decimal
            print(dic[resposta])
        individuo += 1


def calculaFit(populacao, dicpeso):
    individuo = 0
    dicFit = {}
    for i in populacao:  # anda indivíduo a indivíduo

        # print('Indivíduo: ',individuo)
        questao = 0
        for j in range(0, len(i), 4):  # pega as respostas de cada indivíduo por questão
            questao += 1
            #print('Questao:',questao)
            #print(i[j:j+4]) #a resposta em binário
            decimal = int(i[j:j + 4], 2)
            # print(decimal) #a resposta em decimal: ou 1 ou 2 ou 4 ou 8
            resposta = int(str(questao) + str(decimal))  # junta a questão com a resposta em decimal
            #print(dic[resposta])

        if dic[resposta] in dicpeso:  # caso nenhum dos entrevistados tenha escolhido alguma opcao, esta não estará no dic de dicpeso.
            # aqui evita o erro de procurar por algo que não há
            dicFit[individuo] = dicFit.get(individuo, 0) + dicpeso[dic[resposta]]

        if individuo not in dicFit:  # caso o individuo tenha respondido só opções que não estão em dicpeso, então seu fitness será zero
            dicFit[individuo] = 0
        individuo += 1
    print(dicFit)
    return dicFit


def seleciona(dicfit):
    listaSelecionados = []
    for i in sorted(dicfit, key=dicfit.get)[
             4:]:  # ordena o dicionário pelo fit e mostra só os 6 melhores - essa quantidade mudará para 10
        # print(i,round(dicfit[i],1))
        listaSelecionados.append(i)
    # print('SELECIONADOS:',listaSelecionados)
    return listaSelecionados


def criaNovaPop(populacao, selecionados):
    novapop = []
    for i in selecionados[0:4]:  # adiciona os 4 melhores na nova população
        novapop.append(populacao[i])
    return novapop


def cruzamento(populacao, selecionados, novapop):
    for i in range(0, 5, 2):  # pega os 6 individuos, de 2 em dois porque o selecionado[i] vai cruzar com o selecionado[i+1] e vice-versa
        # print(selecionados[i])
        # print(selecionados[i+1])
        ind1 = populacao[selecionados[i]]
        ind2 = populacao[selecionados[i + 1]]
        filho1 = ''
        filho2 = ''
        for j in range(0, len(ind1) - 4,
                       8):  # pega as respostas pares de de individuo1 por questão e concatena com as impares de individuo2
            filho1 += ind1[j:j + 4] + ind2[j + 4:j + 8]
            filho2 += ind2[j:j + 4] + ind1[j + 4:j + 8]
        # print('pai1:',ind1)
        # print('pai2:',ind2)
        # print('filho1:',filho1)
        # print('filho2:',filho2)  #recomendo copiar no papel pai1 e pai 2 e ver o cruzamento (conforme está escrito na sua monografia)
        novapop.append(filho1)
        novapop.append(filho2)
    return novapop


def addFit(populacao, dicpeso):
    individuo = 0
    dicFit = {}
    for i in populacao:
        questao = 0
        for j in range(0, len(i), 4):  # pega as respostas de cada indivíduo por questão
            questao += 1
            # print('Questao:',questao)
            # print(i[j:j+4]) #a resposta em binário
            decimal = int(i[j:j + 4], 2)
            # print(decimal) #a resposta em decimal: ou 1 ou 2 ou 4 ou 8
            resposta = int(str(questao) + str(decimal))  # junta a questão com a resposta em decimal
            # print(dic[resposta])

        if dic[
            resposta] in dicpeso:  # caso nenhum dos entrevistados tenha escolhido alguma opcao, esta não estará no dic de dicpeso.
            # aqui evita o erro de procurar por algo que não há
            dicFit[i] = dicFit.get(i, 0) + dicpeso[dic[resposta]]

        if i not in dicFit:  # caso o individuo tenha respondido só opções que não estão em dicpeso, então seu fitness será zero
            dicFit[i] = 0
        individuo += 1
    return dicFit


def mutacao(populacao):
    possiveisRespostas = ['0001', '0010', '0100', '1000']
    for i in range(4):
        individuo = random.randrange(0, 10)
        questao = random.randrange(0, 20, 4)  # vai trocar o 24 por 156 depois

        # print('individuo:',individuo)
        # print('questao:',questao)
        # print('**',populacao[individuo][0:questao]) #antes da resposta sorteada
        # print('**',populacao[individuo][questao+4:]) #depois da resposta sorteada
        # print('**',populacao[individuo][questao:questao+4]) #a resposta sorteada

        # print('Antes:',populacao[individuo])
        respostaAntiga = populacao[individuo][questao:questao + 4]
        troca = random.randrange(0, 4)

        novaResposta = possiveisRespostas[troca]
        # print(novaResposta)
        while respostaAntiga == novaResposta:
            troca = random.randrange(0, 4)
            novaResposta = possiveisRespostas[troca]
            # print(novaResposta)

        # atualiza
        populacao[individuo] = populacao[individuo][0:questao] + novaResposta + populacao[individuo][questao + 4:]

        # print('Depois',populacao[individuo])
    return populacao