import GoogleSearch from './GoogleSearch';
import NotFoundError from './NotFoundError';

export default class Factory {

  constructor(World) {
    this.World = World;
    this.pages = { "Google Search": GoogleSearch };
  }

  create(name) {
    const pageClass = this.pages[name];
    if (pageClass == null) throw new NotFoundError(name);
    return new pageClass(this.World);
  }

}
