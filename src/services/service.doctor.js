import repositoryDoctor from "../repositories/repository.doctor.js";  

async function Listar (){
    return await repositoryDoctor.Listar();
}

export default {Listar}; 