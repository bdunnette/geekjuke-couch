function(doc) {
  if (doc.sourceFeed) {
    emit(null, doc);
  }
}
