let text = ''
export default function handler(request, response) {

  const command = request.body.request.command
  let resp = void 0

  if( command === 'повтори' ) {
    resp = text
    text = ''
  } else {
    text += ' ' + command
  }
  
  return response.send({
      "version": request.body.version,
      "session": request.body.session,
      "response": {
          "text": resp,
          "end_session": false,
      }
  })
  
}
