!--- Under Development ---! 
# RapidFlow
RapidFlow is a visual frontend to make machine learning approachable for Engineers with basic knowledge in data science.
It's maint for configuring, building, and deploying machine learning models in Python.

RapidFlow is using Jupyter as its backend server. It also provides client and kernel management for working with kernels.

based on [Flow.JS](https://github.com/totaljs/flow)

![picture](https://github.com/helkaroui/RapidFlow/raw/master/image/screen.png)

![picture](https://github.com/helkaroui/RapidFlow/raw/master/image/screen2.png)

# How it's working:
RapidFlow creates a kernel for each flow tab and connect to it. When inserting a new component, 
RapidFlow declares a new function (with the component id). When flow needs to run the component, 
the component function will be called and returns a variable stored only in the kernel.
No data will be passed to the frontend. 

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
