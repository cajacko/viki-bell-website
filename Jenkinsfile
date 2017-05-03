// Setup pipeline parameters:
//  env: multiline
//  dev_ip: string
//
// Setup githooks to run on push
// Setup pipeline script to use this one

node {
    stage('Pull repo') {
        git branch: 'feature/post_loop', url: 'https://github.com/cajacko/viki-bell-website.git'
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

    stage('Pull repo on server') {
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/pull-repo'''
    }

    stage('Pass .env to server') {
        sh '''scp -o StrictHostKeyChecking=no ./.env root@${dev_ip}:/root/viki-bell-website'''
    }

    stage('Install on server') {
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/deploy-install'''
    }

    stage('Test on server') {
        sh '''ssh -o StrictHostKeyChecking=no root@${dev_ip} 'bash -s' < ./scripts/deploy-test'''
    }
}
