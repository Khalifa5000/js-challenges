let title = "Elzero", describtion = "Elzero web schoole", date="25 / 10";

let markUp = `
<div class="card">
  <div class="child">
  <h3> Hello ${title}</h3>
  <p>${describtion}</p>
  <span>${date}</span>
  </div>
</div>
`;

document.write(markUp.repeat(4));

