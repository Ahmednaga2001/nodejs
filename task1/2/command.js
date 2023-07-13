const yargs = require("yargs");
const app = require("./app.js");
yargs.command({
  command: "add",
  describe: "to add",
  builder: {
    fname: {
      describe: "to add fname",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "to add lname",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    app.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});
yargs.command({
  command: "delete",
  describe: "to delete person",

  handler: (x) => {
    app.deletePerson(x.id);
  },
});
yargs.command({
  command: "list",
  describe: "to list data for persons",

  handler: () => {
    app.listData();
  },
});
yargs.command({
  command: "read",
  describe: "to read data for any person",
  builder: {
    id: {
      describe: "",
      demandOption: true,
      type: "string",
    },
  },

  handler: (x) => {
    app.readData(x.id);
  },
});

yargs.parse();



// node command.js  delete --id="4"
// node command.js  delete --id="5"
// node command.js  delete --id="6"
//node command.js  list
//node command.js  read --id="5"