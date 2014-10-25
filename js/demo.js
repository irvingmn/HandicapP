window.demo = 
{ 
	'col': [], 
	'add': function(a, b)
	{ 
		if (b) 
		{
			this.col[a] = b;
		} 
		 	return this; 
	},

	'load': function(a) 
	{ 
		var self = this; 
			if (a) 
			{ 
				self.col[a](); 
			} 
			
	},
};
		