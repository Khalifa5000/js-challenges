let userTitle = "Elzero",
 userDescribtion = "Elzero web schoole",
 registrationDate="25/10";

let markUp = `
<div class="card">
  <h3> Hello ${userTitle}</h3>
  <p>${userDescribtion}</p>
  <span>${registrationDate}</span>
</div>
`;

document.write(markUp.repeat(4));

