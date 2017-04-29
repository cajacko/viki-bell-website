// Setup pipeline parameters:
//  env: multiline
//  dev_ip: string

node {
    stage('Pull repo') {
        git branch: 'develop', url: 'https://github.com/cajacko/viki-bell-website.git'
    }

    stage('Setup .env') {
        writeFile file: '.env', text: env.env
        sh 'cat .env'
    }

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
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/pull-repo'''
        sh '''scp -o StrictHostKeyChecking=no ./.env root@${dev_ip}:/root/viki-bell-website'''
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/deploy-install'''
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/deploy-test'''
    }
}
