async function hämtaAktieData() {
    const url = "API_URL"; // Byt ut mot adressen för aktie-API-et
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  function läggaTillAktieRad(data) {
    const portfölj = document.getElementById("portfölj");
    const rad = `
      <tr>
        <td>${data.namn}</td>
        <td>${data.bolag}</td>
        <td>${data.pris} SEK</td>
      </tr>
    `;
    portfölj.innerHTML += rad;
  }

  
  async function uppdateraPortfölj() {
    const aktieData = await hämtaAktieData();
    aktieData.forEach(läggaTillAktieRad);
  }
  
  uppdateraPortfölj