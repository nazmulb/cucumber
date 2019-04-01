export default class NotFoundError extends Error {

  constructor(pageName) {
    super("Page " + pageName + " not recognised");
  }

}
