var baseUrl = 'http://localhost:8888';
var token = "1dab594a1bca8965c1f6a21d4818dfc2ca22e18e5ddd0f62";


options = {
    kernelName: 'python',
    path: 'foo.ipynb'
};


var tabs = {tab1: {name: 'hello'}, tab2: {name: 'hello2'}}

for(tab in tabs){
    console.log(tabs[tab]);
    services = require('@jupyterlab/services');
    services.ServerConnection.defaultSettings.baseUrl = baseUrl;
    services.ServerConnection.defaultSettings.token = token;
    tabs[tab]['kernel'] = services.Kernel.startNew(options).then(function (kernel) {
        kernel.statusChanged.connect(function (status) {
            if(status._status == "connected"){console.log('connected : ', status._status); } // on_connect
            if(status._status == "busy"){console.log('busy : ', status._status); } // on_busy
            if(status._status == "idle"){console.log('idle : ', status._status); } // on_idle
        });
        return kernel;
    });
}


console.log('start coding here')
