// jest tu sam login bez hasla

const login = prompt('Wprowadz login: ');


if (login == 'daniel' || login == 'grzegorz')  {


let konto = 150
console.log(`Witaj ${login} Twoje aktualne saldo wynosi: ${konto} zł`)

let kontynuuj = true;

while (kontynuuj) {
const wybor = prompt('co chcesz zrobic? WP-wpłata, WY-wypłata, K-koniec, S-saldo').toLowerCase();
  if (wybor === 'wp') {
      let wplata = prompt(' ile chcesz wpłacić? 50, 100, 150, 200')
        if ( wplata == 50 || wplata == 100 || wplata == 150 || wplata == 200) {
     let wplataInt = parseInt(wplata);
        konto = konto + wplataInt;
        console.log(`wpłaciłes ${wplata}zł. Masz ${konto} zł`)
        } else console.log('prosze wprowadz poprawną wartość');
  } else if (wybor === 'wy') {
      let wyplata = prompt(' ile chcesz wypłacić? 50, 100, 150, 200')
        if ( wyplata == 50 || wyplata == 100 || wyplata == 150 || wyplata == 200){
          let wyplataInt = parseInt(wyplata);
            if (konto >= wyplata) {
            konto = konto - wyplataInt;
            console.log(`wypłacono ${wyplataInt}zł`)
              } else console.log(`nie masz środków na koncie ponieważ saldo wynosi ${konto}`)
        } else console.log('prosze wprowadz poprawną wartość')
  } else if (wybor === 'k') {
      console.log('dziekujemy i zapraszamy ponownie')
      return;
  } else if (wybor === 's') {
      console.log(`Twoje aktualne saldo wynoisi: ${konto}`)
  } else console.log(` '${wybor}'  nie jest wlasciwym formatem`)

    
const odp = prompt('czy chcesz kontynuowac? tak/nie?')
    if (odp !=='tak') {
      kontynuuj = false;
  }
}

} else console.log('przepraszamy, błędny login')

console.log('dziekujemy i zapraszamy ponownie')

