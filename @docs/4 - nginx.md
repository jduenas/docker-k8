## Static folder
```
WORKDIR /usr/share/nginx/html
```

## default.conf

Should be copied to /etc/nginx/conf.d/
```
upstream client {
    server <hostname>:3000;
}

upstream api {
    server api:5000;
}

server {
    listen 80;    

    location / {
        # Client is the nginx service name, not docker-compose's
        proxy_pass http://client;
    }

    location /sockjs-node {
        proxy_pass http://client/sockjs-node;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        rewrite /api/(.*) /$1 break;
        proxy_pass http://api;
    }
}
```