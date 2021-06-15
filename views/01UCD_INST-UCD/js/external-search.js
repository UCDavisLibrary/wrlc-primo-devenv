
app.value('searchTargets', [{
	"name": "Worldcat",
	"url": "https://110105.on.worldcat.org/v2/search?",
	"img": "custom/01UCD_INST-UCD/img/worldcat-logo.png",
	"alt": "WorldCat logo",
	mapping: function (queries, filters) {
  	const query_mappings = {
    	'any': 'kw',
    	'title': 'ti',
    	'creator': 'au',
    	'subject': 'su',
    	'isbn': 'bn',
    	'issn': 'n2'
  	}
  	try {
    	return 'queryString=' + queries.map(part => {
      	let terms = part.split(',')
      	let type = query_mappings[terms[0]] || 'kw'
      	let string = terms[2] || ''
      	let join = terms[3] || ''
      	return type + ':' + string + ' ' + join + ' '
    	}).join('')
  	}
  	catch (e) {
    	return ''
  	}
	}
  },

  {
    "name": "Google Scholar",
    "url": "https://scholar.google.com/scholar?q=",
    "img": "custom/01UCD_INST-UCD/img/google-scholar.svg",
    "alt": "Google Scholar Logo",
    mapping: function (queries, filters) {
      try {
        return queries.map(part => part.split(",")[2] || "").join(' ')
      }
      catch (e) {
        return ''
      }
    }
  }
]);

app.value('externalSearchText', "Can't find what you're looking for? Search items held at other libraries.");
