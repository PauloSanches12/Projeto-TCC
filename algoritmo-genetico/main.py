import numpy as np
import random

def populacao_inicial(): #População de individuos iniciais com valores randômicos
    populacao = []

    # Está criando uma populacao com 10 individuos
    for i in range(10):
        individuo = ''
        for j in range(40):
            # Cada individuo está com 4 respostas
            possiveisrespostas = ['0001', '0010', '0100', '1000']
            respostasorteada = random.randrange(0, 4)
            individuo += possiveisrespostas[respostasorteada]
        populacao.append(individuo)

    return  populacao

print(populacao_inicial())


# def teste():
#     populacao = np.zeros((10, 5))
#     a = np.random.choice([0], size=(4, 10))
#     print(a)
#     return  populacao
# print(teste())

# print(random.randrange(0,2)) #gera valor aleatorio 0 e 1