export default class ShowNote {
  static note(string) {
    if (document.querySelector('.note')) {
      return;
    }
    const body = document.querySelector('body');

    const note = document.createElement('div');
    note.className = 'note';
    body.append(note);

    const noteHeader = document.createElement('header');
    noteHeader.className = 'note-header';
    noteHeader.textContent = '...and here again something is wrong';
    note.append(noteHeader);

    const noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    noteContent.textContent = string;
    note.append(noteContent);

    const noteButton = document.createElement('div');
    noteButton.className = 'note-button';
    noteButton.textContent = 'Ok, boss!';
    note.append(noteButton);

    noteButton.addEventListener('click', () => {
      document.querySelector('.attention-card-input').focus();
      note.remove();
    });
  }
}
