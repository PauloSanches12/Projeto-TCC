import ag as algoritmo
populacao = algoritmo.criaPopulacao()
print(populacao)

dicpeso = algoritmo.criapesos()

populacao = algoritmo.criaPopulacao()

populacaoComFit = algoritmo.addFit(populacao,dicpeso)
print('População original')
for i in sorted(populacaoComFit,key=populacaoComFit.get):
    print(i,round(populacaoComFit[i],1))

dicfitness = algoritmo.calculaFit(populacao,dicpeso)
selecionados = algoritmo.seleciona(dicfitness)
novapop = algoritmo.criaNovaPop(populacao, selecionados)
novapop= algoritmo.cruzamento(populacao,selecionados,novapop)
#print(novapop)
novapop = algoritmo.mutacao(novapop)
#print(novapop)
populacaoComFit = algoritmo.addFit(novapop,dicpeso)
print('População nova')
for i in sorted(populacaoComFit,key=populacaoComFit.get):
    print(i,round(populacaoComFit[i],1))