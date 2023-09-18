export default function handler(request, response) {
  const { name = 'World' } = request.query;
  return response.send(JSON.stringify({
            "version": request.body,//.version,
            "session": request.body,//.session,
            "response": {
                "text": 'Привет',
                "end_session": false,
            }
        }));
}
