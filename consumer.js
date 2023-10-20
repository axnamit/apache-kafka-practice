const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "grp1" });

  await consumer.connect();

  consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log({
        topic,
        partition,
        message: message.key.toString(),
        heartbeat,
        pause,
      });
    },
  });

  //   await consumer.disconnect();
}

init();
