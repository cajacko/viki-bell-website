node {
    stage('Pull repo') {
        git branch: 'develop', url: 'https://github.com/cajacko/viki-bell-website.git'
    }

//     stage('Setup .env') {
//         writeFile file: '.env', text: '''MYSQL_ROOT_PASSWORD=MYSQL_ROOT_PASSWORD
// MYSQL_DATABASE=MYSQL_DATABASE
// MYSQL_USER=MYSQL_USER
// MYSQL_PASSWORD=MYSQL_PASSWORD
// MYSQL_HOST=viki-bell-website-mysql
// DEV=true
// TABLE_PREFIX=cj_
// AUTH_KEY=x+m&;VTSw96kta6jMQ(IiH^EdYZ@`#yk+w#]s&9B~t}Djx.[&<@Gomu%}C| /s;_
// SECURE_AUTH_KEY==.~~>xG(ajs0s-&$:u)Nl.Bt76%V9|az3S$r+x,_~]we=UlR{<xl^]+1}jUP)Z/L
// LOGGED_IN_KEY=<qMePaWn}^UQs/|l_A9u3-ZZ#=&TXt#:j}Z(A2v|xkW[0>8-`ys&k<bNEi`A4rvh
// NONCE_KEY=+fw2Fqwjj+)aq1~$6}w^H?Wm[QM48GyLGxo^*3oDUd!S;z=61-sEtUZ].S_(zc=9
// AUTH_SALT=P 2VPBBH$AakZ]5A#k=lT}m0k<Bf6M)5PR$A~TYz@G0z-_{PjR@~O?G7lv}Jp+@S
// SECURE_AUTH_SALT=-aw.=Q3M5;A7qv?864ybTj4eBi|S.p F5|FLQ:i?)]?fuQ8%X Z,NrZw$,>R=f+w
// LOGGED_IN_SALT=t%JdEfa>wnLP&](M+Y`-?&(c^BAWQBJ|3{y3b%Fr|I|@4Rs:3@+hd7dT n0r3Q]X
// NONCE_SALT=!|Cl?r^[Z H!7w+`;}c{+K}Xf.Xdq>O*4W5KvOYG:GunkYE(RcLKb8|*^WRw,PqK
// KENTICO_CLOUD_PROJECT_ID=sample-kentico-cloud-api-id'''

//         sh 'cat .env'
//     }

//     stage('Run Local') {
//         sh 'sudo ./scripts/install'
//     }

//     stage('Testing Local') {
//         sh 'sudo ./scripts/test'
//     }

//     stage('Cleanup') {
//         sh 'sudo ./scripts/cleanup'
//     }

    stage('Deploy on server') {
        sh '''scp -o StrictHostKeyChecking=no ./.env root@178.62.110.187:/root/viki-bell-website'''
        sh '''ssh -o StrictHostKeyChecking=no root@178.62.110.187 'bash -s' < ./scripts/deploy'''
    }
}
