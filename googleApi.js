gapi.drive.realtime.load(fieldID, onFileLoaded, initModel) //load the file, functoin pointers
initModel = function(model){ //exactly once for each time document is created
  moves = model.createList() //create a collaborative list
  model.getRoot().set('moves', moves) //set this in list
}

onFileLoaded = function(doc) { //every time a collaborator opens document
  model_ = doc.getModel()
  model_.getRoot().get('moves').addEventListener( //get notified when something is added
      gapi.drive.realtime.EventType.VALUES_ADDED, updateDisplay) //update display
}

addMove = function(side, start, direction) { //respond to user actions
  newMove = new cube.Move(side, start, direction) //create a new move
  model_.getRoot().get('moves').push(newMove) //add it to "moves"
}
