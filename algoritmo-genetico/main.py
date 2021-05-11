import numpy as np
import random

def individuo(): #Individuo inicial com tamanho 1x40
    individuoInicial = np.random.choice([0], size=(1, 40))
    aleatorio = random.randrange(0, 2)

    return individuoInicial
    # aleatorio = random.randrange(0, 2)
    # for i in individuoInicial:
    #     individuoInicial[i] = aleatorio
    # return individuoInicial

# print("Individuo Inicial", individuo())

def populacao_inicial(): #População de individuos iniciais com valores randômicos, tamanho 10x40
    populacao = np.random.choice([0], size=(4, 10))

    for i in populacao:
        aleatorio = random.randrange(0, 2)
        a = i[:4]
        a += aleatorio
        # print(i)
        print("valor dos individuos do array", a)
    # return populacao

print(populacao_inicial())

# print(random.randrange(0,2)) #gera valor aleatorio 0 e 1