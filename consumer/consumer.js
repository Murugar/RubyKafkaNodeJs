const kafka = require('no-kafka')

const consumer = new kafka.SimpleConsumer
var data = function (messageSet, topic, partition) {
  messageSet.forEach(function(v) {
    console.log(topic, partition, v.offset, v.message.value.toString('utf-8'))
  })
}

return consumer.init().then(function() {
  return consumer.subscribe('test', data)
})
