class Animal{
    int id = 0;
    String nome= '';
    String especie='';
    String raca='';
    double peso=0.0;
    //metodos
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
//instancia
Animal boi;
//Objeto
boi = new Animal();

boi.id = 1;
boi.nome= "bandido";
boi.especie = "bovino";
boi.raca = "nelori";
boi.peso = 499.9;

print(boi.tudoJunto());
}