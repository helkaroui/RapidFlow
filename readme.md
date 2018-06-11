!--- Under Development ---! 
# RapidFlow
RapidFlow is a visual programming interface for Jupyter. RapidFlow can be used to create, configure and deploy machine learning models using already implemented functionalities (without writing code) and to launch API in minutes. It can be used to apply your models in real time to a variety of data sources, databases or streams from connected objects.

RapidFlow is using Jupyter as its backend server. It also provides client and kernel management for working with kernels.

based on [Flow.JS](https://github.com/totaljs/flow)

![picture](https://github.com/helkaroui/RapidFlow/raw/master/image/screen1.png)

![picture](https://github.com/helkaroui/RapidFlow/raw/master/image/screen2.png)

# Installation 

- install jupyter/services [link](https://www.npmjs.com/package/@jupyterlab/services)
```commandline
npm install --save @jupyterlab/services
```
- install jupyter using conda
```commandline
conda install notebook
```


# Start RapidFlow
- open app directory
- install latest dependencies from NPM `$ npm install`
- run `$ python main.py`
- open browser `http://127.0.0.1:8000`

# Done

===== 06-10-2018 =====
- Starting a kernel for each tab 
- Common | Code component done
- Script to run both servers 
- Kernel status (tab icon)

# Todo
before 16-10-2018 :
- apply automatically when adding a new tab (to run kernel before adding elements, otherwise it will crash)
- manage deleting kernels properly (there are some issues)
- stop, pause button not controlling kernels
