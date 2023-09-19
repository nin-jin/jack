let text = ''
export default function handler(request, response) {

  const command = request.body.request.command
  let resp = ''

  if( command === 'повтори' ) {
    resp = text
    text = ''
  } if( command ) {
    text += ' ' + command
  } else if( !text ) {
    resp = 'слушаю'
  }
  
  return response.send({
      "version": request.body.version,
      "session": request.body.session,
      "response": {
          "text": resp || '.',
          "end_session": false,
      }
  })
  
}
