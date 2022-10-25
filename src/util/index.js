
/**
 * Get the name of the targeted location
 *
 * @param {Node} node - HTML node
 * @returns {string} Name of the location
 */
 export function getLocationName(node) {
	return node && node.attributes.name.value
}

export function getLocationIndex(node){
	return Array.from(node.parentElement.children).indexOf(node);
}

/**
 * Get the name of the selected location
 *
 * @param {Object} map - Map of component
 * @param {string} locationId - Id of selected location
 * @returns {string} Name of the selected location
 */
export function getSelectedLocationName(map, locationId) {
	return locationId && map.locations.find(location => location.id === locationId).name
}