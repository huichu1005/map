async function initializeMap() {
	var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});
  
	var map = L.map('map', {
	  center: [-34.228535, 19.880267],
	  zoom: 6,
	  layers: [osm]
	});
  
	var baseMaps = {
	  "OpenStreetMap": osm
	};
	var overlayMaps = {
	};

	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  
	var random_point = await loadGeoJSON(); // 等待异步操作完成
	layerControl.addOverlay(random_point, "Random points");
  }
  
  async function loadGeoJSON() {
	try {
	  const response = await fetch('./data/random_point.geojson');
	  if (!response.ok) {
		throw new Error('Failed to load GeoJSON data');
	  }
	  const data = await response.json();
	  
	  // 处理加载的 GeoJSON 数据
	  var getpoints = L.geoJSON(data);
	  console.log(getpoints);
	  return getpoints;
	} catch (error) {
	  console.error(error);
	}
}
  
  // 调用初始化函数
initializeMap();
  