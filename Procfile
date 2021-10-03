release: python server/manage.py migrate
web: gunicorn --chdir server auction_server.wsgi --log-file -