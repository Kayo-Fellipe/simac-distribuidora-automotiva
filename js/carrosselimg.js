// Banco de marcas
const brands = [
  { name: "ACDelco", logo: "https://i.postimg.cc/XJzKfP17/ACDelco_Logo.png", link: "#"},
  { name: "TRW", logo: "assets/logos/trw.png", link: "#" },
  { name: "Honda", logo: "assets/logos/honda.png", link: "#" },
  { name: "Mopar", logo: "assets/logos/mopar.png", link: "#" },
  { name: "Toyota", logo: "assets/logos/toyota.png", link: "#" }
];

document.addEventListener("DOMContentLoaded", () => {
  const brandTrack = document.getElementById("brandTrack");

  brands.forEach(brand => {
    const brandItem = document.createElement("a");
    brandItem.href = brand.link;
    brandItem.classList.add("brand-item");
    brandItem.target = "_blank";

    const img = document.createElement("img");
    img.src = brand.logo;
    img.alt = brand.name;

    brandItem.appendChild(img);
    brandTrack.appendChild(brandItem);
  });

  // Duplica para efeito infinito
  brandTrack.innerHTML += brandTrack.innerHTML;
});