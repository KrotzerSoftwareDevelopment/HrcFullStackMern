import express from 'express';
import Puppy from '../models/puppyModel';
import {isAuth, isAdmin} from '../util';

const router = express.Router();


router.get("/", async (req, res) => {
    const category = req.query.category ? { category: req.query.category } : {};
    const searchKeyword = req.query.searchKeyword ? {
      name: {
        $regex: req.query.searchKeyword,
        $options: 'i'
      }
    } : {};
    const sortOrder = req.query.sortOrder ?
      (req.query.sortOrder === 'lowest' ? { price: 1 } : { price: -1 })
      :
      { _id: -1 };
    const puppies = await Puppy.find({ ...category, ...searchKeyword }).sort(sortOrder);
    res.send(puppies);
  });
  
  router.get("/:id", async (req, res) => {
    const puppy = await Puppy.findOne({ _id: req.params.id });
    if (puppy) {
      res.send(puppy);
    } else {
      res.status(404).send({ message: "Puppy Not Found." });
    }
  });
  
  router.put("/:id", isAuth, isAdmin, async (req, res) => {
    const puppyId = req.params.id;
    const puppy = await Puppy.findById(puppyId);
    if (puppy) {
      puppy.name = req.body.name;
      puppy.price = req.body.price;
      puppy.image = req.body.image;
      puppy.age = req.body.age;
      puppy.gender = req.body.gender;
      const updatedPuppy = await puppy.save();
      if (updatedPuppy) {
        return res.status(200).send({ message: 'Puppy Updated', data: updatedPuppy });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Puppy Listing.' });
  
  });
  
  router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const deletedPuppy = await Product.findById(req.params.id);
    if (deletedPuppy) {
      await deletedPuppy.remove();
      res.send({ message: "Puppy Listing Deleted" });
    } else {
      res.send("Error in Deletion.");
    }
  });
  
  
  router.post("/", isAuth, isAdmin, async (req, res) => {
    const puppy = new Puppy({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      age: req.body.age,
      gender: req.body.gender
    });
    const newPuppy = await puppy.save();
    if (newPuppy) {
      return res.status(201).send({ message: 'New Puppy Listing Created', data: newPuppy });
    }
    return res.status(500).send({ message: ' Error in Creating Puppy Listing.' });
  })
  
  
  export default router;