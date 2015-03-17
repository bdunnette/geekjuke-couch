function(doc) {
  if (doc.feedUrl) {
    emit(doc.feedUrl, doc);
  }
}
