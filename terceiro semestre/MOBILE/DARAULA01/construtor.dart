class Animal{
    int id = 0;
    String nome= '';
    String especie='';
    String raca='';
    double peso=0.0;
    //metodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
Animal boi = new Animal(1,"bandido","bovino","nelori",499.0);
Animal vaca = new Animal(2,"marlerne","bovino","nelori",499.0);
Animal gato = new Animal(3,"rian","felino","siames",99.0);
Animal cachorro = new Animal(4,"tuim","canino","poppis",99.0);
Animal macaco = new Animal(5,"bruno","primata","sagui",122.0);
Animal baleia = new Animal(6,"felipe","animal","orca",600.0);
Animal tigre = new Animal(7,"mafer","bovino","sumatra",400.0);
Animal elefante = new Animal(8,"leticia","animal","loxodanta",499.0);
Animal raposa = new Animal(9,"math","vulpes","feneco",499.0);
Animal pato = new Animal(10,"lala","aves","pardilheira",499.0);
print(boi.tudoJunto());
print(vaca.tudoJunto());
print(gato.tudoJunto());
print(cachorro.tudoJunto());
print(macaco.tudoJunto());
print(baleia.tudoJunto());
print(tigre.tudoJunto());
print(elefante.tudoJunto());
print(raposa.tudoJunto());
print(pato.tudoJunto());
}