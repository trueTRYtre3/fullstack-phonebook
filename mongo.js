const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Provide the password as an arguement: node mongo.js <password>');
    process.exit(1);
}

const password = process.argv[2];

const url = 
    `mongodb+srv://kyleo0809:${password}@phonebook.8jz0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const personSchema = new mongoose.Schema({
    name: String, 
    number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })
    
    person.save().then(persons => {
            console.log(`added ${persons.name} number ${persons.number} to phonebook`)
            mongoose.connection.close();
    })
} else {
    Person.find({}).then(persons => {
        console.log(`Phonebook: ${persons.length} contact/s`)
        persons.forEach(person => {
            console.log(`${person.name} ${person.number}`);
        })
        mongoose.connection.close();
    })
}
