import React, { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePuppy, listPuppies, deletePuppy } from '../actions/puppyActions';

const PuppiesAdmin = (props) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [puppyName, setPuppyName] = useState('');
  const [dob, setDob] = useState('');
  const [rank, setRank] = useState('');
  const [color, setColor] = useState('');
  const [birthWeight, setBirthWeight] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [momsName, setMomsName] = useState('');
  const [dadsName, setDadsName] = useState('');
  const [icon, setIcon] = useState('');
  const [video, setVideo] = useState('');
  const [gender, setGender] = useState('');
  const [slideImage1, setSlideImage1] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  const puppyList = useSelector(state => state.puppyList);
  const { puppies, loading, error } = puppyList;

  // const puppyList = useSelector(state => state.puppyList);
  // const { loading, puppies, error } = puppyList;

  const puppySave = useSelector(state => state.puppySave);
  const { loading: loadingSave, success: successSave, error: errorSave } = puppySave;
  
  const puppyDelete = useSelector(state => state.puppyDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = puppyDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listPuppies());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (puppy) => {
    setModalVisible(true);
    setId(puppy._id);
    setPuppyName(puppy.puppyName);
    setDob(puppy.dob);
    setRank(puppy.rank);
    setColor(puppy.color);
    setBirthWeight(puppy.birthWeight);
    setBirthTime(puppy.birthTime);
    setMomsName(puppy.momsName);
    setDadsName(puppy.dadsName);
    setIcon(puppy.icon);
    setVideo(puppy.video);
    setGender(puppy.gender);
    setSlideImage1(puppy.slideImage1);
    setDescription(puppy.description);
    setPrice(puppy.price);
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePuppy({
      _id: id,
      puppyName, dob, rank, color, birthWeight, birthTime, 
      momsName, dadsName, icon, video, gender, slideImage1, description, price,
    }));
  }
  const deleteHandler = (puppy) => {
    dispatch(deletePuppy(puppy._id));
  }
  return <div className="PuppyAdminPage">
    <div className="AdminPageContainer">
      <h1> Puppies - Admin</h1>
      <button className="button primary" onClick={() => openModal({})}>Create Puppy Listing</button>
 
    {modalVisible && (
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Create puppy Listing</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="puppyName">
                Name
          </label>
              <input type="text" name="puppyName" value={puppyName} id="puppyName" onChange={(e) => setPuppyName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="dob">
                Dob
          </label>
              <input type="text" name="dob" value={dob} id="dob" onChange={(e) => setDob(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="rank">
                Rank
          </label>
              <input type="text" name="rank" value={rank} id="rank" onChange={(e) => setRank(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="color">
                Color
          </label>
              <input type="text" name="color" value={color} id="color" onChange={(e) => setColor(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="birthWeight">
                Birth Weight
          </label>
              <input type="text" name="birthWeight" value={birthWeight} id="birthWeight" onChange={(e) => setBirthWeight(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="birthTime">
                Birth Time
          </label>
              <input type="text" name="birthTime" value={birthTime} id="birthTime" onChange={(e) => setBirthTime(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="momsName">
                Moms Name
          </label>
              <input type="text" name="momsName" value={momsName} id="momsName" onChange={(e) => setMomsName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="dadsName">
                Dads Name
          </label>
              <input type="text" name="dadsName" value={dadsName} id="dadsName" onChange={(e) => setDadsName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="icon">
                Icon
          </label>
              <input type="text" name="icon" value={icon} id="icon" onChange={(e) => setIcon(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="video">
                Video
          </label>
              <input type="text" name="video" value={video} id="video" onChange={(e) => setVideo(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="gender">
                Gender
          </label>
              <input type="text" name="gender" value={gender} id="gender" onChange={(e) => setGender(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="slideImage1">
                slideImage1
          </label>
              <input type="text" name="slideImage1" value={slideImage1} id="slideImage1" onChange={(e) => setSlideImage1(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="slideImage1">
                SlideImage1
          </label>
              <input type="text" name="slideImage1" value={slideImage1} id="slideImage1" onChange={(e) => setSlideImage1(e.target.value)}>
              </input>
            </li>

            <li>
              <label htmlFor="description">
                Description
          </label>
              <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </li>

            <li>
              <label htmlFor="price">
                Price
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
            </li>
          </ul>
        </form>
      </div>
    )}


    <div className="puppy-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dob</th>
            <th>Rank</th>
            <th>Color</th>
            <th>Birth Weight</th>
            <th>Birth Time</th>
            <th>Moms Name</th>
            <th>Dads Name</th>
            <th>Icon</th>
            <th>Video</th>
            <th>Gender</th>
            <th>Slide Image 1</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
 
          {puppies && puppies.map(puppy => (<tr key={puppy._id}>
      
            <td>{puppy._id}</td>
            <td>{puppy.puppyName}</td>
            <td>{puppy.dob}</td>
            <td>{puppy.rank}</td>
            <td>{puppy.color}</td>
            <td>{puppy.birthWeight}</td>
            <td>{puppy.birthTime}</td>
            <td>{puppy.momsName}</td>
            <td>{puppy.dadsName}</td>
            <td>{puppy.icon}</td>
            <td>{puppy.video}</td>
            <td>{puppy.gender}</td>
            <td>{puppy.slideImage1}</td>
            <td>{puppy.price}</td>
            <td>
              <button className="button" onClick={() => openModal(puppy)} >Edit</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(puppy)} >Delete</button>
            </td>
     
          </tr>))}
       
        </tbody>
      </table>
      </div>
    </div>
  </div>
}
export default PuppiesAdmin;