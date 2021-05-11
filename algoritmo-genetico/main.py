import numpy as np
import random

# np.random.choice([0, 1], size=(10,), p=[1./3, 2./3])

def individuo(): #Individuo inicial com tamanho 1x40
    individuoInicial = np.random.choice([0], size=(1, 40))
    aleatorio = random.randrange(0, 2)

    return individuoInicial
    # aleatorio = random.randrange(0, 2)
    # for i in individuoInicial:
    #     individuoInicial[i] = aleatorio
    # return individuoInicial

# print("Individuo Inicial", individuo())

def populacao_inicial(): #População de individuos iniciais com valor 0, tamanho 10x40
    populacao = np.random.choice([random.randrange(0,2)], size=(10,40))
    return populacao

# print(populacao_inicial())

# print(random.randrange(0,2)) #gera valor aleatorio 0 e 1

def tridimensional():

    # np.arange(0,2)
    # x = np.random.randint(2, size=(2, 40))
    x = np.random.choice([0], size=(4, 10))
    aleatorio = random.randrange(0, 2)

    for i in x:
        a = i[:4]
        a = random.randrange(0, 2)
        print("valor de A", a)
        for y in str(a):
            print("Valor de Y", y)
        # if sum(a) == 0:
        #     d = i[:4]
        #     print("Lista Inicial 0")
        #     print("DDD",d)
        #     print(a)
        # else:
        #     print("Lista inicial completa")
        #     print(a)

    # return x

print(tridimensional())