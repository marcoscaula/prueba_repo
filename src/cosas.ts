interface Cosas{
    id:number;
    name:string;
    description:string;
}
const cosas = [
    {id: 1,name:"iphone 13  pro max",description: "super oferta"},
    {id: 2,name:"MacBook pro m3",description: "la mejor notebook del mercado"},
    {id: 3,name:"Cerveza Stella Artois",description: "oferta 2x1"},
    {id: 4,name:"Tallarines frescos",description: "produiccion propia"},
    {id: 5,name:"Carne picada",description: "super oferta x kg 2000"},
    {id: 6,name:"Cafe Nescafe Dolca suave x 170grs",description: "el mejor cafe de la zona"},
    {id: 7,name:"Pan Bimbo x 500grs",description: "pan blanco casero"}
]




function getAll():Cosas[]{
    //return cosas;
}

function getById(id:number):Cosas | undefined{
   /* const producto_encontrado = cosas.find(p => p.id === id);
    if(producto_encontrado){
        return producto_encontrado;
    }else{
        return undefined;
    }*/
}
export {getAll,getById};