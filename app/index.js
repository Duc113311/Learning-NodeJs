const yargs = require("yargs");

// CRUD
// Create
yargs.command({
  command: "create",
  handler: () => {
    console.log("create");
  },
});

// Read-all
yargs.command({
  command: "read-all",
  handler: () => {
    console.log("read-all");
  },
});

// Real-detail
yargs.command({
    command:"read-detail",
    handler:()=>{
        console.log("read-detail");
    }
})

// update
yargs.command({
    command:"update",
    handler:()=>{
        console.log("update");
    }
})

// delete
yargs.command({
    command:"delete",
    handler:()=>{
        console.log("delete");
    }
})
yargs.parse();
 