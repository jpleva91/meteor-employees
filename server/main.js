// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employee';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Great place to generate data

  // Check to see if data exists in the collection
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    // Generate data...
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }
});