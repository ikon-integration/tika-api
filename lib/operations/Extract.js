export default class Extract {
  constructor(API) {
    this.api = API;
  }
  async extractFromContent(content /*buffer, stream, blob or plain string*/, optionalHint, optionalHeaders) {
    const req = await this.api.newBaseRequest('PUT');
    req.path = '/unpack/all';
    req.body = content;
    if (optionalHint) req.appendHeader('Content-Type', optionalHint);
    if (optionalHeaders) {
      for (let key of Object.keys(optionalHeaders)) req.appendHeader(key, optionalHeaders[key]);
    }
    return await req.exec();
  }
}
