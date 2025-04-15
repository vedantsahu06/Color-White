function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = content.style.display === 'block';

    // Close all
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));

    // Toggle current
    if (!isOpen) {
      content.style.display = 'block';
      arrow.classList.add('rotate');
    }
  }

  // faq

  function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    const isOpen = answer.style.display === 'block';

    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(ar => ar.classList.remove('rotate'));

    // Toggle current one
    if (!isOpen) {
      answer.style.display = 'block';
      arrow.classList.add('rotate');
    }
  }



  // maps

  const map = L.map('map').setView([37.7749, -122.4194], 10); // Default to San Francisco

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // Alert Zones
  const zones = [
    {
      name: "ZONE A",
      coords: [[37.7, -122.5], [37.8, -122.4]],
      color: "#e74c3c",
    },
    {
      name: "ZONE B",
      coords: [[37.75, -122.45], [37.85, -122.35]],
      color: "#e67e22",
    },
    {
      name: "ZONE C",
      coords: [[37.72, -122.4], [37.8, -122.3]],
      color: "#f1c40f",
    },
    {
      name: "ZONE D",
      coords: [[37.68, -122.48], [37.74, -122.38]],
      color: "#3498db",
    },
  ];

  zones.forEach(zone => {
    const bounds = [[zone.coords[0][0], zone.coords[0][1]], [zone.coords[1][0], zone.coords[1][1]]];
    const rect = L.rectangle(bounds, {
      color: zone.color,
      weight: 1,
      fillOpacity: 0.4,
    }).addTo(map);

    const labelLatLng = [
      (zone.coords[0][0] + zone.coords[1][0]) / 2,
      (zone.coords[0][1] + zone.coords[1][1]) / 2
    ];

    L.marker(labelLatLng, {
      icon: L.divIcon({
        className: 'zone-label',
        html: `<div style="background:${zone.color}">${zone.name}</div>`,
        iconSize: [60, 20]
      })
    }).addTo(map);
  });

  // Locate User
  let userMarker;
  function locateUser() {
    map.locate({ setView: true, maxZoom: 14 });
  }

  map.on('locationfound', (e) => {
    if (userMarker) {
      map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng).addTo(map).bindPopup("Your Location").openPopup();
  });

  map.on('locationerror', () => {
    alert("Unable to retrieve your location.");
  });

  // Reset View
  function resetView() {
    map.setView([37.7749, -122.4194], 10);
  }