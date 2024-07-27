data = [
  {
    name: "Joseph Brown",
    img: "team-m1.jpeg",
    role: "Marketing Head",
  },
  {
    name: "Nancy White",
    img: "team-m2.jpeg",
    role: "Marketing Head",
  },
  {
    name: "Earl Martinez",
    img: "team-m3.jpeg",
    role: "Marketing Head",
  },
  {
    name: "Josephine Allard",
    img: "team-m4.jpeg",
    role: "Marketing Head",
  },
];

const card = document.getElementById("teams-container");

data.forEach((element) => {
  card.insertAdjacentHTML(
    "beforeend",
    `<div class="teams-card">
    <img
      src="public/teams-images/${element.img}"
      alt="person-1"
      width="108px"
      height="108px"
      class="person"
    />
    <p class="person-name">${element.name}</p>
    <p class="person-role">${element.role}</p>
    <ul class="icons-list">
            <li>
              <img
                src="public/icons/facebook.png"
                alt="facebook"
                class="icon"
              />
            </li>
            <li>
              <img
                src="public/icons/twitter.png"
                alt="twitter"
                class="icon"
              />
            </li>
            <li>
              <img
                src="public/icons/linkedin.png"
                alt="linkedin"
                class="icon"
              />
            </li>
            <li>
              <img
                src="public/icons/instagram.png"
                alt="instagram"
                class="icon"
              />
            </li>
            <li>
              <img
                src="public/icons/youtube.png"
                alt="youtube"
                class="icon"
              />
            </li>
          </ul>
    </div>
    `
  );
});
