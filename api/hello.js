export default function handler(request, response) {
  return response.send({
      "version": request.body.version,
      "session": request.body.session,
      "response": {
          "text": request.body.request.command,
          "end_session": false,
      }
  });
}
