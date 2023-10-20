const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting ...");
  admin.connect();
  console.log("admin connection success.");

  console.log("createing topics ");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("topics created success");

  console.log("admin diconnect");
  await admin.disconnect();
}

init();
