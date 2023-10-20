const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "codemon",
  brokers: ["192.168.29.239:9092"],
});
