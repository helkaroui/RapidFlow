var baseUrl = 'http://localhost:8888';
var token = "1dab594a1bca8965c1f6a21d4818dfc2ca22e18e5ddd0f62";


class Kernel{

    constructor(baseUrl, token, tab){
        this.baseUrl = baseUrl;
        this.token = token;
        this.options = {
            kernelName: 'python',
            path: 'tmp_${tab}.ipynb'
        };

        this.services = require('@jupyterlab/services');
        this.services.ServerConnection.defaultSettings.baseUrl = this.baseUrl;
        this.services.ServerConnection.defaultSettings.token = this.token;

        this.kernel = null;
        this.last_state = 'not connected'

        this.on_connect = function(){return undefined;};
        this.on_busy = function(){return undefined;};
        this.on_idle = function(){return undefined;};
    }

    connect(callback){
        var this_obj = this;
        this.services.Kernel.startNew(this.options).then(function (value) {
            this_obj.on_connect = callback;
            this_obj.kernel = value;
            this_obj.kernel.statusChanged.connect(function (status) {
                if(status._status == "connected"){
                    this_obj.on_connect();
                }
                if(status._status == "busy"){
                    this_obj.on_busy();
                }
                if(status._status == "idle"){
                    this_obj.on_idle();
                }
            });
        });
        return this_obj.kernel;
    };

    connected() {
        return this.kernel._status == 'connected'
    };

    restart(callback) {
        this.kernel.restart().then(callback)
    };

    interrupt(callback) {
        this.kernel.interrupt().then(callback);
    };

    shutdown(callback) {
        this.kernel.shutdown().then(callback);
    };

    execute(callback){
        var future = this.kernel.requestExecute({ code: 'print("hello !")' });
        future.onIOPub = (msg) => {
            callback(msg);
        };
    };

}





myKernel = new Kernel(baseUrl, token, 'test');
myKernel.on_busy = function () { console.log(myKernel.kernel._status); }
myKernel.on_idle = function () { console.log(myKernel.kernel._status); }
myKernel.connect(function ()   {
    console.log(myKernel.kernel._status);
    myKernel.execute(console.log);
});





