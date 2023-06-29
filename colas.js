/* Ejercicio 1 */

const colaoriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
const [cola1, cola2] = dividircola (colaoriginal);

function dividircola(colaoriginal){
    let cola1 = [];
    let cola2 = [];
    let i = 0;
    while (i < colaoriginal.length) {
      if (i % 2 === 0) {
        cola1.push(colaoriginal[i]);
      } else {
        cola2.push(colaoriginal[i]);
      }
      i++;
    }
    return [cola1, cola2];
  }
console.log(cola1);
console.log(cola2);

/* Ejercicio 2 */

cola = [
    { user:"User1", ticket:true },
    { user:"User2", ticket:true },
    { user:"User3", ticket:false },
    { user:"User4", ticket:true },
    { user:"User5", ticket:false },
    { user:"User6", ticket:false },
    { user:"User7", ticket:true },
    { user:"User8", ticket:true },
    { user:"User9", ticket:true },
    { user:"User10", ticket:false },
    { user:"User11", ticket:true },
    ];

function verificarcola (cola) { 
    colados = [];
    colafinal = [];
    for (user in cola) {        
        if (user.ticket) {
            colafinal.push(user);
        } else { 
            colados.push(user);
        } 
    }   
 return colados, colafinal;
    }
     
colados, colafinal = verificarcola(cola)

print("Cola inicial:");
print(cola);
print("Usuarios colados:");
print(colados);
print("Cola final:");
print(colafinal);