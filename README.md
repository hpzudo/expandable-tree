# expandable-tree
Little expandable tree exercise.
<br><br>
NOTES:
<br>
<br>
-> Using mocked data (files are just JSON objects and the content is a simple string instead of a File, Blob, XML, etc.)
<br>
<br>
-> The chosen <b>architecture</b> (NgRx + Wizard component encapsulating the folders browser presentational component) is kind of a 'overkill' solution for this exercise but on the other hand it's more scalable, less reactive and more maintainable for future changes (e.g.: Adding CRUD, sort or filter functionalities).
<br>
<br>
-> NgRx helps to apply the State pattern design solution so the app follows variable inmmutability and prevent potential mutability/side-effects changes issues.
<br>
<br>
-> The Wizard component helps to 'orchestrate' the actions from its child component which only receives data, display it and outputs the upcoming user events (Presentational Component design).
