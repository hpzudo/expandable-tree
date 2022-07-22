# expandable-tree
Little expandable tree exercise.
<br><br>
The choosen <b>architecture</b> (NgRx + Wizard component encapsulating the folders browser presentational component) is kind of 'overkill' for this exercise but on the other hand it's more scalable and less reactive for future changes.

<br><br>

NgRx helps to apply the State pattern design solution so the app follows variable inmmutability and prevent potential mutability/side-effects changes issues.
The Wizard helps to 'orchestrate' the actions from its child component which only receives data, display it and outputs the upcoming user events.
