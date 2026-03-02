function calcularRank(vitorias, derrotas){

    let saldo = vitorias - derrotas ;
    let  nivel = ""
    let niveis = [
        {min: 0, max:10, nome: "ferro"},
         {min : 11, max: 20 , nome:"Bronze"} ,
            {min:21, max:50, nome :"Prata"},
                {min:51, max:80, nome:"Ouro"},
                {min:81, max:90, nome:"Diamante"},
                {min:91, max:100, nome:"Lendario"},
                {min:101, max: 100000000000, nome : "imortal"}
    ]

        for (let i =0; i< niveis.length; i++) {

            if (vitorias>= niveis[i].min && vitorias <= niveis[i]. max){
                nivel = niveis[i].nome;
                break;
            }
        }
            return`o Heroi tem saldo de ${saldo} esta no nivel ${nivel}`
}
 
let resultado = calcularRank(120,20)

console.log(resultado)