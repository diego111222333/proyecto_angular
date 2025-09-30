export class Contactos {
    nombre:string;
    apellido: string;
    telefono: string;
    direccion:string;
    email: string;
    anio:Date;
    sueldo:number;
    gastos:number;
    nacimiento:string;
    registrado: boolean;
    mensaje:string;
    constructor(){
        this.nombre="";
        this.apellido="";
        this.telefono="";
        this.direccion="";
        this.email="";
        this.anio=new Date();
        this.sueldo=0;
        this.gastos=0;
        this.nacimiento="";
        this.registrado=false;
        this.mensaje="";
    }
}
