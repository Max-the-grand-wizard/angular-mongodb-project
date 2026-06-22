import mongoose from 'mongoose';

const BilSchema = new mongoose.Schema({
  reg: String,
  color: String,
  brand: String,
  model: String
}, {
  collection: 'my_database_collection'
});

const BilModel = mongoose.model('BilModel', BilSchema);

export default BilModel; 
