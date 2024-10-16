import { getAll,getById,getByDescription } from "./cosas";

function main(){
const buscandoproducto = getById(2);
console.log(buscandoproducto);
console.log(getAll());
const buscarPorDescripcion = getByDescription("oferta");
console.table(buscarPorDescripcion);
}
main();