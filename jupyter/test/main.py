# Copyright ML Editor Team.
# Distributed under the terms of the Modified BSD License.

from __future__ import print_function, absolute_import
import json
import os
from notebook.notebookapp import NotebookApp
from traitlets import Bool

HERE = os.path.dirname(os.path.realpath(__file__))

class jupyterServer(NotebookApp):
    """A notebook app that runs a separate process and exits on completion."""
    open_browser = Bool(False)

    def __init__(self):
        NotebookApp.__init__(self)
        # Save current config for the node script.
        config = dict(baseUrl=self.connection_url, token=self.token)
        with open('config.json', 'w') as fid:
            json.dump(config, fid)


if __name__ == '__main__':
    jupyterServer.launch_instance()
