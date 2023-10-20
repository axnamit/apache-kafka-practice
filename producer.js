const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  await producer.connect();

  console.log("producer connected successfully");
  console.log("message creating ");
  await producer.send({
    topic: "rider-updates",
    messages: [
      { partition: 0, key: "amit", value: "asdfasd" },
      {
        key: "loc_update",
        value: JSON.stringify({ name: "amit", loc: "deoghar" }),
      },
    ],
  });
  console.log("message created successfully");
  await producer.disconnect();
}

init();
