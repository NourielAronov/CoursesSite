const dboperations = require('./dboperations');

dboperations.getCourses().then(result => {
    console.log(result)
})


