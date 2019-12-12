const form = ('../models/form')



function Getform (req,res) {
    let formId = req.params.formId

Form.findbyId(formId,(err,form) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!datos) return res.status(404).send({message: `El datoso no existe`})

    res.status(200).send({ datos })
  })
}



