#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../total.js/bin/totaljs" "$@"
  ret=$?
else 
  node  "$basedir/../total.js/bin/totaljs" "$@"
  ret=$?
fi
exit $ret
