exports.handler =  async function(event, context){
    return event.arguments.msg;
  };