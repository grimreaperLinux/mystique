import { useState } from "react";
import FileBase64 from "react-file-base64";
import { createItem} from "./functions";

function CarouselAdmin() {
  const [carousel, setItem] = useState({ name: "", image: "", comment: "" });
  const [items, setItems] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(carousel);
    setItems([...items, result]);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(carousel, null, "\t")}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setItem({ ...carousel, name: e.target.value })}
        />
        <input
          type="text"
          className="input-field"
          onChange={(e) => setItem({ ...carousel, comment: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...carousel, image: base64 })}
        />
        <div className="right-align">
          <button className="btn">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarouselAdmin;