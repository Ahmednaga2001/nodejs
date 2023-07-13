const fs = require("fs");
const addPerson = (id, fanme, lname, age, city) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => {
    return obj.id == id;
  });
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fanme: fanme,
      lname: lname,
      age: age,
      city,
      city,
    });
    saveAllData(allData);
  } else {
    console.log("DUPLICATED_DATA_ERROR");
  }
};
//////////////////////////////////////////////////////////
const deletePerson = (id) => {
  const allData = loadData();
  const newData = allData.filter((obj) => {
    return obj.id !== id;
  });
  console.log(newData);
  saveAllData(newData);
};
//////////////////////////////////////////////////////////
const listData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fanme, obj.lname);
  });
};
//////////////////////////////////////////////////////////
const readData = (id) => {
  
  const allData = loadData();
  const neededPerson = allData.find((obj) => {
    return obj.id == id;
  });
  console.log(neededPerson);
};
//////////////////////////////////////////////////////////
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};
//////////////////////////////////////////////////////////
const saveAllData = (allData) => {
  const allDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", allDataJson);
};
//////////////////////////////////////////////////////////
module.exports = {
  addPerson,
  deletePerson,
  listData,
  readData,
};
