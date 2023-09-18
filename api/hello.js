export default function handler(request, response) {
  return response.send(JSON.stringify({
      "version": request.body.version,
      "session": request.body.session,
      "response": {
          "text": request.body.request.command,
          "end_session": false,
      }
  }));
}
