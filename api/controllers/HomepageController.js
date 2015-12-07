/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
		actions: false
	},
	index: function(req, res) {
		return res.view('homepage', {
			currentDate: (new Date()).toString()
		});
	}
};
