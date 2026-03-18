void main(){
    String texto = "Alo mundo";
    int numero = 99999999000000;
    double n = 0.333333333333333333333;
    bool ativo = false;
    var coisa = 10; //Nao tipada
    dynamic tudo = "oi";
    print(texto);
    print(numero);
    print("Real ="+n.toString());//Concatenação
    print(ativo?"Oi":"Tchau");//If termário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}