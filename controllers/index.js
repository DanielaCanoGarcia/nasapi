const models = require("../database/models");

const createDato = async (req, res) =>{
	try{
		const datos = await models.Datos.create(req.body);
		return res.status(201).json({
			datos
		});
	} catch(error){
		return res.status(500).json({error:error.message});
	}
};

const getAllDatos = async (req, res) => {
	console.log('getting Datos');
	try{
		const Datos = await models.Datos.findAll({
			include:[
			]
		});
		return res.status(200).json({Datos});
	} catch (error){
		return res.status(500).send(error.message);
	}
};
module.exports={
	createDato,
	getAllDatos
};
