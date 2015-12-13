##Adding Sass to my project
        cd ~
        mkdir sketching 
        cd sketching 
        git init .
        cd ~/sketching
        mkdir scss
        mkdir css
        touch scss/test.scss sass -w scss:css

##tell Sass to watch the file and update the CSS every time the Sass file changes:
*go up 1 folder and then cd in css/style.css*

        sass --watch style.scss:../css/style.css
