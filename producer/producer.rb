require "kafka"

kafka = Kafka.new(
  seed_brokers: ["localhost:9092"],
)

# Instantiate a new producer.
producer = kafka.producer

# Add a message to the producer buffer.
producer.produce("This is a Test Ruby Producer Message", topic: "test")

# Deliver the messages to Kafka.
producer.deliver_messages
