const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newsReader", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection succesfull`);
}).catch((e) => {
    console.log('No connection');
});