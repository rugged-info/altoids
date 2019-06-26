const child = require('child_process')
child.spawn('script',null, {'stdio': 'inherit'})