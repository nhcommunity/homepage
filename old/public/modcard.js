const modcard = async (name) => {
  const raw = await fetch(`public/data/${name}.json`);
  const data = await raw.json();
  console.log(data);

  let cardString = `
    <div class="modcard">
      <h1 class="modcard-name">${data.name}</h1>
      <div class="modcard-container">
      <p class="modcard-bio">${data.bio}</p>
      <img class="modcard-img" src=${data.avatar} />
         <p class="modcard-link-title">Socials:</p>
         <ul class="modcard-link-list">
    `;
  data.links.forEach((link) => {
    cardString += `<li class="modcard-li"><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a></li>`;
  });

  cardString += `
        </ul>
        <p class="modcard-proj-title">Projects:</p>
        <ul class="modcard-proj-list">
`;

  data.projects.forEach((proj) => {
    cardString += `<li class="modcard-li"><a href="${proj.url}" target="_blank" rel="noopener noreferrer">${proj.name}</a></li>`;
  });

  cardString += `
        </ul>
      </div>
      <p class="modcard-notes">${data.notes}</p>
    </div>
    `;

  const wrapper = document.querySelector(".modcard-wrapper");
  wrapper.innerHTML = cardString;
  wrapper.style.display = "initial";

  wrapper.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        return;
    }
    wrapper.style.display = "none";
  });
};
