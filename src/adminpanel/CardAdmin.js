import { useState } from "react";
import FileBase64 from "react-file-base64";
import "./admin.css";
import Select from "react-select";
import axios from "axios";

function Cardadmin() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDes, setEnteredDes] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, selectoption] = useState([]);

  const actions = [
    { label: "Necklet", value: 1 },
    { label: "Eardrops", value: 2 },
    { label: "Wristlet", value: 3 },
  ];

  const sendData = async (card) => {
    const url = "http://localhost:5000/card";
    try {
        const { data } = await axios.post(url, card)
        return data;
      } catch (error) {
        console.log(error);
      }
  }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const nameChanger = (event) => {
    setEnteredName(event.target.value);
  };

  const imgChanger = (event) => {
    setEnteredImage(event);
  };

  const desChanger = (event) => {
    setEnteredDes(event.target.value);
  };

  const codeChanger = (event) => {
    setEnteredCode(event.target.value);
  };

  const amountChanger = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const CardData = {
      name: enteredName,
      price: enteredAmount,
      code: enteredCode,
      description: enteredDes,
      image: enteredImage,
      outofstock: isChecked,
      type: selectedOption.label,
    };
    sendData(CardData);
    setEnteredAmount("");
    setEnteredDes("");
    setEnteredName("");
    setEnteredCode("");
    setIsChecked(false);
    selectoption([]);
  };

  return (
    <>
      <h2>Add Your Card</h2>
      <div className="hehe">
        <form onSubmit={submitHandler}>
          <div className="form">
            <div className="input-container ic1">
              <input
                id="firstname"
                class="input"
                type="text"
                value={enteredName}
                onChange={nameChanger}
              />
              <div className="cut"></div>
              <label for="firstname" class="placeholder">
                Name
              </label>
            </div>
            <div className="input-container ic1">
              <input
                id="firstname"
                class="input"
                type="text"
                value={enteredDes}
                onChange={desChanger}
              />
              <div className="cut"></div>
              <label for="firstname" class="placeholder">
                Description
              </label>
            </div>
            <div className="input-container ic1">
              <input
                id="firstname"
                class="input"
                type="text"
                value={enteredCode}
                onChange={codeChanger}
              />
              <div className="cut"></div>
              <label for="firstname" class="placeholder">
                Code
              </label>
            </div>
            <div className="input-container ic1">
              <input
                id="firstname"
                class="input"
                type="number"
                value={enteredAmount}
                onChange={amountChanger}
              />
              <div className="cut"></div>
              <label for="firstname" class="placeholder">
                Price
              </label>
            </div>
            <div className="input-container ic1">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  imgChanger(base64);
                }}
              ></FileBase64>
            </div>
            <div>
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
              />
              Out of Stock
            </div>
            <Select
              options={actions}
              onChange={(value) => {
                selectoption(value);
              }}
              value={selectedOption}
              defaultValue={actions[0]}
            />
            <button type="text" className="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cardadmin;
