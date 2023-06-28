import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2> hello welcome to angular</h2>
  <p> welcome </p>
  <button type="button" class="btn btn-outline-primary">Srinath</button>
 

<h2>Text input fields</h2>


  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Srinath"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Sree">




 `,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Srinath Angular Class ';
}
