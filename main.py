# ===================================================
# FOR DEVELOPMENT
# RapidFlow
# https://github.com/helkaroui/RapidFlow
# Author : Hamza EL KAROUI
# ===================================================

from __future__ import print_function, absolute_import
import json
import os
from notebook.notebookapp import NotebookApp
from traitlets import Bool
from multiprocessing import Process, Queue
from Naked.toolshed.shell import execute_js


HERE = os.path.dirname(os.path.realpath(__file__))

def start_node_server(meassaging):
    print('starting node server')
    config = meassaging.get()
    success = execute_js('release.js', config['baseUrl']+" "+config['token'])


class jupyterServer(NotebookApp):
    """A notebook app that runs a separate process and exits on completion."""
    open_browser = Bool(False)
    def start(self):
        # Save current config for the node script.
        config = dict(baseUrl=self.connection_url, token=self.token)
        with open('config.json', 'w') as fid:
            json.dump(config, fid)

        messaging_pipeline = Queue()
        messaging_pipeline.put(config)
        p1 = Process(target=start_node_server, args=(messaging_pipeline, ))
        p1.start()

        NotebookApp.start(self)

if __name__ == '__main__':
    print('starting jupyter server')
    jupyterServer.launch_instance()
