Fuente: Montserrat

Paleta de colores:
    --primario:rgba(21, 154, 156,1);
    --Secundario:rgba(0,35,51,1);
    --Terciario: rgba(180, 190, 201,1);

Para indicar a que repositorio vamos a estar pusheando

git remote add origin <remote_url>



git fetch es el comando que le dice a tu git local que recupere la última información de los metadatos del original (aunque no hace ninguna transferencia de archivos. Es más bien como comprobar si hay algún cambio disponible).

git pull por otro lado hace eso Y trae (copia) esos cambios del repositorio remoto.



Visualizar Branchs remote_repository

git branch -a



Para ver los branch locales

git branch



Para cambiar el branch local

git switch <branch_name>



Para Pushear desde un branch local con nombre diferente al un branch remoto 

git push <remote_repository> <local_branch>:<remote_branch> 

Por Ejemplo:
git push origin main:Ramiro

git push origin main:Carina

git push origin main:Javier

git push origin main:Liliana



Para mas informacion visitar:
https://phoenixnap.com/kb/git-push-to-remote-branch


Para Pushear a Remoto Principal (¡SOLO PARA MERGE!)(no usar como branch normal)

git add .
git commit -m ""
git push -u origin main



Eliminar Branch Remoto (Cuidado con este comando, preguntar antes de usar)

git push origin -d branch-name

Por ejemplo:
git push origin -d master (proximoa a eliminar)


Eliminar Branch local

git branch -d branch-name