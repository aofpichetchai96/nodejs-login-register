# Install
create package.json
```bash
npm init -y
```

install package 
```bash
npm i express nodemon express-session mongoose ejs connect-flash bcrypt
```


Edit package.json file and config nodemon run server index.js
```bash
scripts": { 
            "test": "echo "Error: no test specified" && exit 1", 
            "start": "nodemon index.js" 
           }
```