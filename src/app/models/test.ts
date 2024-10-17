export interface Productos{
    name:string,
    desc:string,
    price:number,
    img:string
}

type Roles = { //creacion de tipos de datos
    rol: "admin"|"cliente"|"vendedor"
}

export interface Usuario{
    id:number,
    name:string,
    description:string,
    rol:Roles,

}
