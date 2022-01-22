let jmeno = 'Petra';
let vek = '34';
let vaha = 65;
let vyska = 1.67;
let BMI = Math.round((vaha / vyska ** 2) * 10) / 10;

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let, vážím ' +
    vaha +
    'kg, měřím ' +
    vyska +
    'm a moje BMI je ' +
    BMI
);

let jmenoZena = 'Lada';
let jmenoMuz = 'Tomáš';
let narozeniMesicZena = 7;
let narozeniRokZena = 1993;
let narozeniMesicMuz = 3;
let narozeniRokMuz = 1990;
let rozdilVek =
  (narozeniRokZena - narozeniRokMuz) * 12 +
  narozeniMesicZena -
  narozeniMesicMuz;

console.log(
  jmenoZena +
    ' a ' +
    jmenoMuz +
    ' jsou od sebe věkově vzdáleni ' +
    rozdilVek +
    ' měsíců'
);
