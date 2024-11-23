Abres GitHub, generas un nuevo token en [configuraciones de desarrollador > tokens](https://github.com/settings/tokens)
y en la carpeta del proyecto pones

```
git init
git remote add origin https://<Nombre de usuario>:<token>@github.com/RayanBel/Web.git
git pull origin main
```

Trabajas lo que tengas que trabajar

Se escribe `git pull` cada vez que se tiene que descargar desde el repo remoto

```
git add .
git commit -m "<Explicas lo que hiciste>"
git push origin main
```

y sigues trabajando
