import mongoose from 'mongoose';

const puppySchema = new mongoose.Schema({
    puppyName: { type: String, required: true},
    dob:{ type: String, required: true},
    rank:{type: String, required: true},
    color:{ type: String, required: true},
    birthWeight:{ type: String, required: true},
    birthTime:{ type: String, required: true},
    momsName:{ type: String, required: true},
    dadsName:{ type: String, required: true},
    icon:{ type: String, required: true},
    video:{ type: String, required: true},
    gender:{ type: String, required: true},
    slideimage1:{ type: String, required: true},
    // slideimage2:{ type: String, required: true},
    // slideimage3:{ type: String, required: true},
    // slideimage4:{ type: String, required: true},
    discription:{ type: String, required: true},
    price:{ type: Number, default: 0, required: true},
    // priceincludes:{ type: Number, default: 0, required: true},
    // priceincludesTwo:{ type: Number, default: 0, required: true},
    // reg: { type: String, default: 0, required: true},
    // BirthCertifitionRecieved:{ type: Boolean, default: false, required: true},
    // AdoptionCertificateRecieved:{ type: Boolean, default: false, required: true},
    // AdoptedFamily:{ type: String, default: 0, required: true}, 
});

const puppyModel = mongoose.model("Puppy", puppySchema);

export default puppyModel;