const ipoData = [
  {
    companyLogo: "https://via.placeholder.com/80",
    companyName: "Tech Corp",
    priceBand: "₹500 - ₹550",
    openDate: "2025-05-20",
    closeDate: "2025-05-24",
    issueSize: "₹1000 Cr"
  },
  {
    companyLogo: "https://via.placeholder.com/80",
    companyName: "Finance Ltd",
    priceBand: "₹250 - ₹270",
    openDate: "2025-05-18",
    closeDate: "2025-05-22",
    issueSize: "₹600 Cr"
  }
];

const ipoList = document.getElementById("ipo-list");

ipoData.forEach(ipo => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100">
      <div class="card-body">
        <div class="d-flex align-items-center mb-3">
          <img src="${ipo.companyLogo}" alt="${ipo.companyName} Logo" class="me-3" width="50">
          <h5 class="card-title mb-0">${ipo.companyName}</h5>
        </div>
        <p><strong>Price Band:</strong> ${ipo.priceBand}</p>
        <p><strong>Open:</strong> ${ipo.openDate}</p>
        <p><strong>Close:</strong> ${ipo.closeDate}</p>
        <p><strong>Issue Size:</strong> ${ipo.issueSize}</p>
      </div>
    </div>
  `;

  ipoList.appendChild(col);
});
