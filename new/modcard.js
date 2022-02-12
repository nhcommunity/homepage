const modcardWrapper = document.querySelector(".modcard-wrapper");
const modcard = async (name) => {
  const raw = await fetch(`${name}.json`);
  const data = await raw.json();

  // Modcard string details
  let modcard = `
    <div class="modcard">
    <h1 class ="modcard__name">${data.name}</h1>
    <img class ="modcard__image" src="${data.avatar}"/>
    <p class ="modcard__bio">${data.bio}</p>
    <p class ="modcard__links--title">Socials:</p>
    <ul class ="modcard__links--list">
    `;

  data.links.forEach((link) => {
    modcard += `
        <li 
            class ="modcard__links--item">
                <a 
                    href="${link.url}" 
                    class ="modcard__links--link">
                    ${link.name}
                </a>
        </li>
        `;
  });
  modcardWrapper.style.display = "block";
  modcardWrapper.innerHTML = modcard;
};
