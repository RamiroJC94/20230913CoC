Fuente: Montserrat

Paleta de colores:
    --primario:rgba(21, 154, 156,1);
    --Secundario:rgba(0,35,51,1);
    --Terciario: rgba(180, 190, 201,1);

Para indicar a que repositorio vamos a estar pusheando

git remote add origin <remote_url>



Para ver los branch locales

git branch



Para cambiar el branch local

git switch <branch_name>



Para Pushear desde un branch local con nombre diferente al un branch remoto 

git push <remote_repository> <local_branch>:<remote_branch> 

git push origin main:Ramiro



Para mas informacion visitar:
https://phoenixnap.com/kb/git-push-to-remote-branch


Para Pushear a Remoto Principal (¡SOLO PARA MERGE!)(no usar como branch normal)

git add .
git commit -m ""
git push -u origin main