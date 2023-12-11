const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./Index');// Assuming your Express app is in the index.js file
const mongoose = require('mongoose');
const RemindersModel = require('./Reminders'); // Path to your RemindersModel file
const { expect } = chai;

chai.use(chaiHttp);

describe('TimeKeeper App - Backend Tests', () => {
  before(async () => {
    // Close the existing connection before creating a new one
    if (mongoose.connection.readyState) {
      await mongoose.connection.close();
    }
   
    // Connect to a test database before running the tests
    await mongoose.connect("mongodb+srv://maurerev:MotorCityMayhem@clustertest.d4k2fe9.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   });

  describe('Reminder API Endpoint Tests', () => {
    it('should retrieve a list of reminders', async () => {
      // Assuming you have at least one reminder in the database
      const response = await chai.request(app).get('/getReminders');
      
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      // Add more assertions based on your API response structure and business logic
    });

    it('should add a new reminder', async () => {
      const newReminder = {
        name: 'Test Reminder',
        priority: 2,
        eventTime: '2023-12-31T12:00:00Z',
        remindTime: '2023-12-31T11:00:00Z',
      };

      const response = await chai.request(app).post('/createReminder').send(newReminder);

      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body.name).to.equal('Test Reminder');
      // Add more assertions based on your API response structure and business logic
    });
  });
});