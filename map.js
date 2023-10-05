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
  
	var random_point = await loadRandomPoint(); // 等待异步操作完成
	layerControl.addOverlay(random_point, "Random points");
	var study_area = await loadStudyArea(); // 等待异步操作完成
	layerControl.addOverlay(study_area, "Study area");
}
  
async function loadRandomPoint() {
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

async function loadStudyArea() {
	try {
	  const response = await fetch('./data/study_area.geojson');
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
  