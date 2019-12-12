const exam = require('../models/exam')



function getexam (req, res) {
    exam.find({}, (err, exam) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!exam) return res.status(404).send({message: 'No existen exam'})
  
      res.send(200, { 'exam': exam[0] })
    })
}

function updateexam (req, res) {
    let examId = req.params.examId
    let update_exam = req.body
  
    exam.findByIdAndUpdate(examId, update_exam, (err, examUpdated) => {
      console.log("======= HEREEEE ======")
      console.log(update_exam)
      if (err) res.status(500).send({message: `Error al actualizar el exam: ${err}`})
  
      res.status(200).send({ exam: update_exam })
    })
}

function deleteexam (req, res) {
    let examId = req.params.examId
  
    exam.findById(examId, (err, exam) => {
      if (err) res.status(500).send({message: `Error al borrar el exam: ${err}`})
  
      exam.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el exam: ${err}`})
        res.status(200).send({message: 'El exam ha sido eliminado'})
      })
    })
  }

module.exports = {
    getexam,
    updateexam,
    deleteexam
  }