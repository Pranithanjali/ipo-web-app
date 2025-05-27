const ipoData = {
  companyLogo: "https://via.placeholder.com/100",
  companyName: "Bluestock Technologies Ltd.",
  priceBand: "₹100 - ₹120",
  openDate: "2025-06-01",
  closeDate: "2025-06-04",
  issueSize: "₹500 Cr",
  issueType: "Book Built",
  listingDate: "2025-06-10",
  status: "Open",
  ipoPrice: "₹110",
  listingPrice: "₹130",
  listingGain: "18.2%",
  cmp: "₹135",
  currentReturn: "+22.7%",
  rhpPDF: "https://example.com/rhp.pdf",
  drhpPDF: "https://example.com/drhp.pdf"
};

// Inject IPO data into HTML
const container = document.getElementById("ipoDetails");

container.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-4">
  <!-- Bluestock logo -->
  <div>
    <img src="Bluestock_logo.png.png" alt="Bluestock Logo" width="60">
  </div>

  <!-- IPO company logo -->
  <div>
  <img src="${ipoData.companyLogo}" alt="IPO Company Logo" width="80"
       onerror="this.style.display='none'">
</div>

</div>

<h3 class="text-center mb-3">${ipoData.companyName}</h3>

  <ul class="list-group mb-4">
    <li class="list-group-item"><strong>Price Band:</strong> ${ipoData.priceBand}</li>
    <li class="list-group-item"><strong>Open Date:</strong> ${ipoData.openDate}</li>
    <li class="list-group-item"><strong>Close Date:</strong> ${ipoData.closeDate}</li>
    <li class="list-group-item"><strong>Issue Size:</strong> ${ipoData.issueSize}</li>
    <li class="list-group-item"><strong>Issue Type:</strong> ${ipoData.issueType}</li>
    <li class="list-group-item"><strong>Listing Date:</strong> ${ipoData.listingDate}</li>
    <li class="list-group-item"><strong>Status:</strong> ${ipoData.status}</li>
    <li class="list-group-item"><strong>IPO Price:</strong> ${ipoData.ipoPrice}</li>
    <li class="list-group-item"><strong>Listing Price:</strong> ${ipoData.listingPrice}</li>
    <li class="list-group-item"><strong>Listing Gain:</strong> ${ipoData.listingGain}</li>
    <li class="list-group-item"><strong>Current Market Price:</strong> ${ipoData.cmp}</li>
    <li class="list-group-item"><strong>Current Return:</strong> ${ipoData.currentReturn}</li>
  </ul>
  <div class="text-center">
    <a href="${ipoData.rhpPDF}" target="_blank" class="btn btn-primary download-btn">Download RHP</a>
    <a href="${ipoData.drhpPDF}" target="_blank" class="btn btn-secondary">Download DRHP</a>
  </div>
`;
