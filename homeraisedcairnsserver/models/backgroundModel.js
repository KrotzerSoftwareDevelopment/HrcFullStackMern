import mongoose from 'mongoose';

const backgroundSchema = new mongoose.Schema({
    image: {type: String, required: true},
    alt: {type: String, required: true}, 
    
});

const backgroundModel = mongoose.model("Backgound", backgroundSchema);

export default backgroundModel;