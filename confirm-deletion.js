function run(argv) {
  const app = Application.currentApplication()
  app.includeStandardAdditions = true

  yesButton = 'Delete'
  noButton = 'Cancel'

  const answer = app.displayDialog('Are you sure you want to delete this file?', {
    buttons: [noButton, yesButton],
    defaultButton: noButton,
    cancelButton: noButton
  })

  return answer.buttonReturned == yesButton ?  'command:delete' : 'command:cancel'
}
