module.exports = {
  findOne: function(req, res) {
    Person.find(req.params.id).exec(function(err, persons) {
      var person = persons[0];
      person.fullName = person.firstName + ' ' + person.lastName;
      res.json(person);
    })
  }
}
