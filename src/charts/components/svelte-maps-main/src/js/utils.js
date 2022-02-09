import { csvParse, autoType } from 'd3-dsv';
import { feature } from 'topojson-client';

const colors = {
  seq5: ['rgb(234, 236, 177)', 'rgb(169, 216, 145)', 'rgb(0, 167, 186)', 'rgb(0, 78, 166)', 'rgb(0, 13, 84)'],
  div10: ['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061']	
};

export async function getData(url) {
  let response = await fetch(url);
  let string = await response.text();
	let data = await csvParse(string, autoType);
  console.log('data', data)
  return data;
}

export async function getTopo(url, layer) {
  let response = await fetch(url);
  console.log('response', response)
  let json = await response.json();
  console.log('json', json)
  let geojson = await feature(json, layer);
  return geojson;
}

export async function sortCSV(data) {
	let res2 = data

	let vals2 = res2.map(d => d.salary).sort((a, b) => a - b);
	let len2 = vals2.length;
	let breaks2 = [
		vals2[0],
		vals2[Math.floor(len2 * 0.2)],
		vals2[Math.floor(len2 * 0.4)],
		vals2[Math.floor(len2 * 0.6)],
		vals2[Math.floor(len2 * 0.8)],
		vals2[len2 - 1]
	];
	res2.forEach(d => {
		d.color = getColor(d.salary, breaks2, colors.seq5);
	});
  
  return res2;
}

export function getColor(value, breaks, colors) {
  let color;
  let found = false;
  let i = 1;
  while (found == false) {
    if (value <= breaks[i]) {
      color = colors[i - 1];
      found = true;
    } else {
      i ++;
    }
  }
  return color ? color : 'lightgrey';
}