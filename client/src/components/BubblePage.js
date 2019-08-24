import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { getColors } from "../actions/getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchColors = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => {
          console.log(res)
          setColorList(res.data)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchColors();
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
