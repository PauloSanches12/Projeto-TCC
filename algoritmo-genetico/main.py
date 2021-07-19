import ag as algoritmo
populacao = algoritmo.criaPopulacao()
print(populacao)

dicpeso = algoritmo.criapesos()
dicfitness = algoritmo.calculaFit(populacao,dicpeso)
selecionados = algoritmo.seleciona(dicfitness)
novapop= algoritmo.cruzamento(populacao,selecionados)
print(novapop)