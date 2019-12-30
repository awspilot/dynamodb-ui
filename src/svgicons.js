Ractive.components['icon-plus'] = Ractive.extend({
	template: `
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 42 42" style="width: 14px;height: 14px;" xml:space="preserve">
			 <polygon fill='#fff' points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
		</svg>
	`
})

Ractive.components['icon-refresh'] = Ractive.extend({
	template: `
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 477.867 477.867" style="width: 14px;height: 14px;" xml:space="preserve">
	<g>
		<g>
			<path fill='#fff' d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479
				c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933
				c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207
				c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4
				C426.667,7.641,419.026,0,409.6,0z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill='#fff' d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696
				c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606
				c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4
				c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068
				c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>
		</g>
	</g>
	</svg>
	`
})

Ractive.components['icon-trash'] = Ractive.extend({
	template: `
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" style="width: 14px;height: 14px;" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 315 315">
		  <g>
		    <path fill='#fff' d="m256.774,23.942h-64.836v-6.465c0-9.636-7.744-17.477-17.263-17.477h-34.348c-9.521,0-17.266,7.841-17.266,17.478v6.465h-64.835c-9.619,0-17.445,7.76-17.445,17.297v11.429c0,7.168 4.42,13.33 10.698,15.951 1.989,39.623 13.5,231.193 14.018,239.801 0.222,3.696 3.284,6.58 6.987,6.58h170.033c3.703,0 6.766-2.884 6.987-6.58 0.518-8.607 12.028-200.178 14.018-239.801 6.278-2.621 10.698-8.783 10.698-15.951v-11.43c5.68434e-14-9.537-7.826-17.297-17.446-17.297zm-119.713-6.464c0-1.918 1.465-3.478 3.266-3.478h34.348c1.8,0 3.264,1.56 3.264,3.478v6.465h-40.877v-6.465zm-82.282,23.761c0-1.818 1.546-3.297 3.445-3.297h198.549c1.899,0 3.445,1.478 3.445,3.297v11.429c0,1.819-1.546,3.299-3.445,3.299h-198.548c-1.899,0-3.445-1.479-3.445-3.299v-11.429zm181.143,259.761h-156.848c-2.055-34.247-11.479-191.674-13.51-231.033h183.867c-2.031,39.359-11.454,196.786-13.509,231.033z"/>
		    <path fill='#fff' d="m157.5,95.125c-3.866,0-7,3.134-7,7v176.109c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-176.109c0-3.866-3.134-7-7-7z"/>
		    <path fill='#fff' d="m110.2,102.04c-0.202-3.86-3.507-6.837-7.355-6.625-3.86,0.201-6.827,3.494-6.625,7.355l9.182,175.829c0.195,3.736 3.285,6.635 6.984,6.635 0.123,0 0.247-0.003 0.371-0.01 3.86-0.201 6.827-3.494 6.625-7.355l-9.182-175.829z"/>
		    <path fill='#fff' d="m212.155,95.415c-3.899-0.223-7.153,2.764-7.355,6.625l-9.184,175.829c-0.202,3.861 2.765,7.154 6.625,7.355 0.125,0.007 0.248,0.01 0.371,0.01 3.698,0 6.789-2.898 6.984-6.635l9.184-175.829c0.202-3.861-2.764-7.154-6.625-7.355z"/>
		  </g>
		</svg>
`
})

Ractive.components['icon-database'] = Ractive.extend({
	template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="width: 14px;height: 14px;">
		<g id="Database-3" data-name="Database">
		<path fill='#fff' d="M18.152,18.885c-1.4-.251-2.695-.544-3.854-.871a1,1,0,1,0-.542,1.925c1.221.344,2.58.652,4.042.915a1.078,1.078,0,0,0,.178.015,1,1,0,0,0,.176-1.984Z"/><path d="M22.062,19.457a1,1,0,1,0-.229,1.986A89.287,89.287,0,0,0,32,22a89.366,89.366,0,0,0,10.141-.554,1,1,0,1,0-.228-1.986A87.455,87.455,0,0,1,32,20,87.345,87.345,0,0,1,22.062,19.457Z"/><path d="M22.062,35.457a1,1,0,1,0-.229,1.986A89.287,89.287,0,0,0,32,38a89.366,89.366,0,0,0,10.141-.554,1,1,0,1,0-.228-1.986A87.455,87.455,0,0,1,32,36,87.345,87.345,0,0,1,22.062,35.457Z"/>
		<path fill='#fff' d="M41.913,51.46A87.455,87.455,0,0,1,32,52a87.345,87.345,0,0,1-9.938-.543,1,1,0,1,0-.229,1.986A89.287,89.287,0,0,0,32,54a89.366,89.366,0,0,0,10.141-.554,1,1,0,1,0-.228-1.986Z"/>
		<path fill='#fff' d="M18.152,34.885c-1.4-.251-2.695-.544-3.854-.871a1,1,0,1,0-.542,1.925c1.221.344,2.58.652,4.042.915a1.078,1.078,0,0,0,.178.015,1,1,0,0,0,.176-1.984Z"/>
		<path fill='#fff' d="M18.152,50.885c-1.4-.251-2.695-.544-3.854-.871a1,1,0,1,0-.542,1.925c1.221.344,2.58.652,4.042.915a1.078,1.078,0,0,0,.178.015,1,1,0,0,0,.176-1.984Z"/>
		<path fill='#fff' d="M49.135,3.186A109.613,109.613,0,0,0,32,2,109.613,109.613,0,0,0,14.865,3.186C7.894,4.347,7,5.834,7,7V55c0,4.6,12.577,7,25,7s25-2.4,25-7V7C57,5.834,56.106,4.347,49.135,3.186ZM55,39c0,2.039-8.96,5-23,5S9,41.039,9,39V26.815C13.519,29.523,24.7,30,32,30s18.481-.477,23-3.185Zm0-15c0,1.661-7.136,4-23,4S9,25.661,9,24V10.815C13.519,13.523,24.7,14,32,14s18.481-.477,23-3.185ZM9,7.076C9.741,6.015,17.321,4,32,4S54.259,6.015,55,7.076V8c0,1.661-7.136,4-23,4S9,9.661,9,8ZM32,60C17.96,60,9,57.039,9,55V41.924C13.029,44.609,22.556,46,32,46s18.971-1.391,23-4.076V55C55,57.039,46.04,60,32,60Z"/></g></svg>

`
})

Ractive.components['icon-x'] = Ractive.extend({
	template: `
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 512.001 512.001" style="width: 14px;height: 14px;" xml:space="preserve">
		<g>
			<g>
				<path fill='#fff' d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
					L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
					c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
					c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
			</g>
		</g>
		</svg>
`
})

Ractive.components['icon-play'] = Ractive.extend({
	template: `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 41.999 41.999" style="width: 14px;height: 14px;" xml:space="preserve">
	<path fill='#fff' d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/>
</svg>
	`
})


Ractive.components['icon-prev'] = Ractive.extend({
	template: `
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 477.175 477.175" style="width: 14px;height: 14px;" xml:space="preserve">
		<g>
			<path fill='#fff' d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
				c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
		</g>
		</svg>
	`
})

Ractive.components['icon-next'] = Ractive.extend({
	template: `
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 477.175 477.175" style="width: 14px;height: 14px;" xml:space="preserve">
		<g>
			<path fill='#fff' d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
				c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
				"/>
		</g>
		</svg>
	`
})
Ractive.components['icon-caret-down'] = Ractive.extend({
	template: `
		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362" style="width: 14px;height: 14px;"
			 xml:space="preserve">
		<g>
			<path fill='#fff' d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
				C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
				s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
		</g>
		</svg>
	`
})
Ractive.components['icon-filter'] = Ractive.extend({
	template: `
		<svg height="393pt" viewBox="-4 0 393 393.99003" width="393pt" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
			<path fill='#fff' d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0"/>
		</svg>
	`
})
