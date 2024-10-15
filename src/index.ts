import { getAll,getById } from "./cosas";










function main(){
const buscandoproducto = getById(2);
console.log(buscandoproducto);
console.log(getAll());
}
main();