import numpy as np
import random

# np.random.choice([0, 1], size=(10,), p=[1./3, 2./3])

def individuo(): #Individuo inicial com tamanho 1x40
    individuoInicial = np.random.choice([0], size=(1, 40))
    aleatorio = random.randrange(0, 2)
    for i in individuoInicial:
        individuoInicial[i] = aleatorio
        print(individuoInicial)
    #return individuoInicial

print("Individuo Inicial", individuo())

def populacao_inicial(): #População de individuos iniciais com valor 0, tamanho 10x40
    populacao = np.random.choice([random.randrange(0,2, (0,1))], size=(10,40))
    return populacao

# print(populacao_inicial())

# print(random.randrange(0,2)) #gera valor aleatorio 0 e 1