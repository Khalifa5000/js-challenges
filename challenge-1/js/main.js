let userTitle = "Elzero",
 userDescribtion = "Elzero web schoole",
 registrationDate="25/10";

let markUp = `
<div class="card">
  <div class="child">
  <h3> Hello ${userTitle}</h3>
  <p>${userDescribtion}</p>
  <span>${registrationDate}</span>
  </div>
</div>
`;

document.write(markUp.repeat(4));

