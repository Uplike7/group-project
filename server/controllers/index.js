let express = require('express');
let router = express.Router();

let Survey = require('../models/survey');


module.exports.displayHomePage = (req, res, next) => {
    Survey.find((err, surveyList) => {  
        if(err)
        {
            return console.error(err);
        }
        else
        {  

         //console.log(books);
         res.render('books/list',  {title: 'Survey', survey: surveyList

        });      
        }
    });
    res.render('content/index', {title: 'Home'});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('content/add', {title: 'Add Survey' 
})          
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "survey": req.body.survey, 
        "purpose": req.body.purpose,
        "creator": req.body.creator,
        "rating": req.body.rating
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/index');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; 

    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit
           })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id": id,
        "survey": req.body.survey, 
        "purpose": req.body.purpose,
        "creator": req.body.creator,
        "rating": req.body.rating
    });
    
    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/index');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/index');
        }
    });
}

