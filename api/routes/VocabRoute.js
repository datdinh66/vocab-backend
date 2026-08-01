// route : define api endpoints + method

// link to controller
const VocabController = require('../controllers/VocabController')

const VocabRoute = (app) => {
    // //declare all api endpoints & method here
    // app.get('/api/vocab', vocabController.viewAllVocab)
    // app.get('/api/vocab/:id', vocabController.viewVocabById)

    // app.post('/api/vocab', vocabController.createVocab)
    // app.put('/api/vocab/:id', vocabController.updateByIdVocab)

    // app.delete('/api/vocab/:id', vocabController.deleteByIdVocab)
    // app.delete('/api/vocab', vocabController.deleteAllVocab)

    //second method: group by endpoint (links)
    //without parameter "id"
    app.route('/api/vocabs')
        .get(VocabController.viewAllVocabs)
        .post(VocabController.createVocab)
        .delete(VocabController.deleteAllVocabs)

    //with parameter "id"
    app.route('/api/vocabs/:id')
        .get(VocabController.viewVocabById)
        .put(VocabController.updateVocabById)
        .delete(VocabController.deleteVocabById)
}

//export route
module.exports = VocabRoute