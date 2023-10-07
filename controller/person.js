const Person = require('../model/person')

const { validationResult } = require('express-validator')

exports.postName = (req, res, next) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({ 
        message: 'name should be a string',
        errors: errors.array()
    })
    }
    const name = req.body.name;
    const person = new Person ({
        name: name
    })
    person.save()
        .then(person=>{
            res.status(201).json({
                message: "Person created",
                person: {
                    name: person
                }
            })
        }

        )
        .catch(err=>console.log(err))
}

exports.getPerson = (req, res, next) =>{
    const personID = req.params.user_id
    Person.findById(personID)
        .then( person =>{
            res.status(200).json({
                name: person
            })
        })
        .catch(err=>console.log(err))
}

exports.updatePerson = (req, res, next) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({ 
        message: 'all inputs should be string',
        errors: errors.array()
    })
    }
    const personID = req.params.user_id
    const name = req.body.name
    
    Person.findByIdAndUpdate(personID, req.body, {new: true} )
        .then(result =>{
            res.status(200).json({
                message: "Updated Successfully",
                name: name
        })
        })
        .catch(err=>console.log(err))

}


exports.deletePerson = (req, res, next) =>{
    const personID = req.params.user_id
    Person.findById(personID)
        .then( person =>{
           return person.deleteOne({ _id: personID })
        })
        .then(() => {
            res.status(200).json({ message: 'Deleted Successfully !' });
          })
        .catch(err=> console.log(err))

}