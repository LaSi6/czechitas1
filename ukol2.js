let jmeno = prompt('jak se jmenuješ?');
let vek = Number(prompt('kolik je ti let?'));
let podminka = 18;
let doba = podminka - vek;
console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let,`);
if (vek > podminka) {
  console.log(' a tak máte právo řídit auto.');
}
if (doba === 1) {
  console.log(
    `a tak musíte počkat ještě ${doba} rok, než budete moci řídit auto.`
  );
}
if (doba > 1 && doba < 5) {
  console.log(
    `a tak musíte počkat ještě ${doba} roky, než budete moci řídit auto.`
  );
}
if (doba > 5) {
  console.log(
    `a tak musíte počkat ještě ${doba} let, než budete moci řídit auto.`
  );
}
