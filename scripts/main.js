function Login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario == "teste" && senha == "teste") {
        alert("Login concluído!");
    } else {
        alert("Usuário e/ou senha errados.");
    }
}

function Enviar() {
    var nome = document.getElementById("nomeid").value;
    var email = document.getElementById("emailid").value;
    var endereco = document.getElementById("enderecoid").value;
    var cidade = document.getElementById("cidadeid").value;
    var pais = document.getElementById("paisid").value;
    var fone = document.getElementById("foneid").value;
    var strCPF = document.getElementById("cpfid").value;
   function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) *
   (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
   }
   var testacpf1 = TestaCPF(strCPF);
   if (testacpf1 != true)
    alert(' CPF Incorreto: ' + strCPF);
   else {
    alert('Seu CPF: ' + strCPF);
    alert('Seu nome: ' + nome);
    alert('Seu email: ' + email);
    alert('Seu endereço: ' + endereco);
    alert('Sua cidade: ' + cidade);
    alert('Seu país: ' + pais);
    alert('Seu telefone: ' + fone);
   }
   }
function Produtos() {
    var pName1 = document.getElementById("productName1").value;
    var quantity1 = document.getElementById("quantity1").value;

    var pName2 = document.getElementById("productName2").value;
    var quantity2 = document.getElementById("quantity2").value;
    
    var pName3 = document.getElementById("productName3").value;
    var quantity3 = document.getElementById("quantity3").value;
    
    var products = new Array();
    
    let item1 = [pName1, quantity1];
    let item2 = [pName2, quantity2];
    let item3 = [pName3, quantity3];
    products.push(item1, item2, item3);

    document.write(products[0][0]+": "+products[0][1]+"<br>");
    document.write(products[1][0]+": "+products[1][1]+"<br>");
    document.write(products[2][0]+": "+products[2][1]+"<br>");
}