const fs = requires ("fs")

const rutaArchivo ="./ejemploPromesas.txt";

const operaciones = async()=>{
    try{
        //escribir contenido en el archivo
        resultado= await fs.promises.writeFile(rutaArchivo,"contenido archivo");
        console.log("resultado");
    }
    catch (error){
        console.log("error",error.message);

    }

}